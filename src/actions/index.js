export const addBasket = (payload) => {
    return {type: "ADD_BASKET", payload};
};

export const clearBasket = () => {
  return {type: "CLEAR_BASKET"}
};

export const deleteItem = (payload) => {
    return {type: "DELETE_ITEM", payload}
};

export const totalSumAction = (payload) => {
    return {type: "TOTAL_SUM", payload}
};

export const countBasketAction = (payload) => {
    return {type: "COUNT_BASKET", payload}
};
