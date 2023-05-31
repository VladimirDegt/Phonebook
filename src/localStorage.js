const STORAGE_KEY = "phonebook";

export const getItemLocalStorage = () => localStorage.getItem(STORAGE_KEY);

export const setItemLocalStorage = (valueLocalStorage) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(valueLocalStorage));
};

export const removeItemLocalStorage = () => localStorage.removeItem(STORAGE_KEY);

