export const addBasket = (payload) => {
    return {type: "ADD_BASKET", payload};
};

export const clearBasket = () => {
  return {type: "CLEAR_BASKET"}
};

export const deleteItem = (payload) => {
    return {type: "DELETE_ITEM", payload}
};

export const amountAdd = (payload) => {
  return {type: "AMOUNT_ADD", payload}
};

export const amountDelete = (payload) => {
  return {type: "AMOUNT_DELETE", payload}
};

export const basketCountAction = (payload) => {
  return {type: "BASKET_COUNT", payload}
};
