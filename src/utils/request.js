import { removeLocalStorage } from './index';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { ToastContainer, toast } from "react-toastify";

const cookies = new Cookies();

const baseURL = process.env.REACT_APP_API_BASE_URL

const CancelToken = axios.CancelToken;
const pendingRequests = new Map();

axios.interceptors.response.use(
  (response) => response,
  (error = {}) => {
    const { status, config } = error.response || {};
    const { url } = config || {};
    if (status === 401) {
      if (url.includes('/api/order/get-video')) {
        return Promise.reject(error);
      }
      removeLocalStorage('user');
      cookies.remove('token', { path: '/' });
      window.location.reload();
      console.log('location.reload');
    }
    return Promise.reject(error);
  },
);

const codeMessage = {
  200: 'The request has succeeded',
  201: 'New resource has been created ',
  202: 'The request has been received',
  204: 'No Content',
  401: 'Unauthorized Operation',
  403: 'You do not have access rights to the content',
  404: 'Not Found',
  406: 'Not Acceptable',
  410: 'The request content is not longer available',
  422: 'The request was well-formed but was unable to be followed due to semantic errors.',
  500: "The server has encountered a situation it doesn't know how to handle",
  502: 'Bad Gateway',
  503: 'The server is not ready to handle the request',
  504: 'Timeout',
};

const errorHandler = (error, custom = {}) => {
  const { statusCodes = [] } = custom;
  if (axios.isCancel(error)) {
    return {
      success: false,
      errorHandled: true,
      reason: 'cancelled',
      ...error,
    };
  }

  const { response } = error;
  const isServer = typeof window === 'undefined';
  if (isServer) {
    response.success = false;
    return response;
  }

  if (response && response.status && codeMessage[response.status]) {
    response.success = false;
    response.errorHandled = true;
    const errorText = codeMessage[response.status] || response.statusText;
    if (
      !statusCodes.length ||
      (statusCodes.length &&
        !codeMessage[
          statusCodes.find((stcode) => response.status === stcode) || ''
        ])
    ) {
      toast.error(errorText || 'Sorry something went wrong');
    }
  } else if (!response) {
    toast.error('Please check your internet connection');
    return { success: false, errorHandled: true };
  }

  return {
    ...response,
    success: false,
    errorHandled: true,
    reason: 'network',
  };
};

/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 *
 * Note Don't add anymore params if needed add a object type called 'extra' or something
 * can tell me what's the need for includeAuthHead?
 */
const request1 = (props) => {
  const {
    url = '',
    options = {},
    cookies = null,
    includeAuthHeader = true,
    handleError = true,
    customError,
    token,
  } = props;
  return apiRequest(
    url,
    options,
    cookies,
    includeAuthHeader,
    handleError,
    customError,
    token,
  );
};

const apiRequest = (
  url,
  options = {},
  _ = null,
  includeAuthHeader = true,
  handleError = true,
  customError = {},
  token,
) => {
  const headers = {};

  if (includeAuthHeader && (cookies.get('recipie-token') || token)) {
    headers['Authorization'] = token
      ? `Bearer ${token}`
      : `Bearer ${cookies.get('recipie-token')}`;
  }

  let opts = options;

  opts = {
    ...opts,
    headers: { ...headers, ...options.headers },
  };

  return axios((options.baseURL || baseURL) + url, opts)
    .then((json) => {
      if (json?.data?.length > -1) {
        return { success: true, data: json.data };
      }
      return { success: true, ...json?.data };
    })
    .catch((e) => {
      if (handleError) {
        return errorHandler(e, customError);
      } else {
        throw e;
      }
    });
};

const request = (
  url,
  options = {},
  _ = null,
  includeAuthHeader = true,
  handleError = true,
  token = '',
) => {
  return apiRequest(url, options, _, includeAuthHeader, handleError, {}, token);
};

const cancellableRequest1 = async ({
  requestId = '',
  url = '',
  options = {},
  cookies = null,
  handleError = true,
  customError = { showError: true },
}) => {
  if (pendingRequests.has(requestId)) {
    pendingRequests.get(requestId).cancel();
    pendingRequests.delete(requestId);
  }

  const cancelToken = new CancelToken((cancel) => {
    pendingRequests.set(requestId, { url, cancel });
  });
  return await request1({
    url,
    options: {
      ...options,
      cancelToken,
    },
    cookies,
    includeAuthHeader: true,
    handleError,
    customError,
  }).then((response) => {
    if (
      response.success ||
      (!response.success && response.reason !== 'cancelled')
    ) {
      pendingRequests.delete(requestId);
    }
    return response;
  });
};

const cancellableRequest = async (
  requestId,
  url,
  options = {},
  cookies = null,
  handleError = true,
) => {
  if (pendingRequests.has(requestId)) {
    pendingRequests.get(requestId).cancel();
    pendingRequests.delete(requestId);
  }

  const cancelToken = new CancelToken((cancel) => {
    pendingRequests.set(requestId, { url, cancel });
  });
  return await request(
    url,
    {
      ...options,
      cancelToken,
    },
    cookies,
    true,
    handleError,
  ).then((response) => {
    if (
      response.success ||
      (!response.success && response.reason !== 'cancelled')
    ) {
      pendingRequests.delete(requestId);
    }
    return response;
  });
};

export default request;
