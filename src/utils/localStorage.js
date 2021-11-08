export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
