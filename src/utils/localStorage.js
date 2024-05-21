export const setLocalStorage = (name, value, stringify = true) => {
    if (stringify) {
      return localStorage.setItem(name, JSON.stringify(value));
    } else {
      return localStorage.setItem(name, value);
    }
  };
  
  export const getLocalStorage = (name, parse = true) => {
    try {
      if (parse) {
        return JSON.parse(localStorage.getItem(name) || '{}');
      } else {
        return localStorage.getItem(name);
      }
    } catch (e) {
      return undefined;
    }
  };
  
  export const removeLocalStorage = (name) => {
    localStorage.removeItem(name);
  };
  