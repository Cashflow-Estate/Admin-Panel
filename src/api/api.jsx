import request from '../utils/request';
import { stringify } from 'qs';

// Deal APIs
export const createDealApi = async (data) => {
  return request('/api/v1/deals', {
    method: 'POST',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const updateDealApi = async (id, data) => {
  return request(`/api/v1/deals/${id}`, {
    method: 'PATCH',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const getAllDealsApi = async (params) => {
  return request(`/api/v1/deals?${stringify(params)}`, {
    method: 'GET',
  }).then((res) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const getDealByIdApi = async (id) => {
  return request(`/api/v1/deals/${id}`, {
    method: 'GET',
  }).then((res) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const deleteDealByIdApi = async (id) => {
  return request(`/api/v1/deals/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

// User APIs
export const loginApi = async (data) => {
  return request('/api/v1/users/login', {
    method: 'POST',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const logoutApi = async () => {
  return request('/api/v1/users/logout', {
    method: 'POST',
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const registerApi = async (data) => {
  return request('/api/v1/users/register', {
    method: 'POST',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const getCurrentUserApi = async () => {
  return request('/api/v1/users/current-user', {
    method: 'GET',
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const updateUserAccountApi = async (data) => {
  return request('/api/v1/users/update-account', {
    method: 'PATCH',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const changePasswordApi = async (data) => {
  return request('/api/v1/users/change-password', {
    method: 'POST',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const requestOtpApi = async (data) => {
  return request('/api/v1/users/forgot-password/request-otp', {
    method: 'POST',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const verifyOtpApi = async (data) => {
  return request('/api/v1/users/forgot-password/verify-otp', {
    method: 'POST',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};

export const resetPasswordApi = async (data) => {
  return request('/api/v1/users/forgot-password/reset-password', {
    method: 'POST',
    data: data,
  }).then((res) => {
    if (!res || !res?.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
