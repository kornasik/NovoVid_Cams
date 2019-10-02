const reducer = (
    state = {
        basket: [],
        totalSum: 0
    }
    , action) => {
    switch (action.type) {
        case "ADD_BASKET":
            const newArr = [...state.basket, action.payload];
            return {
                ...state,
                basket: newArr
            };

        case "CLEAR_BASKET":
            return {
                ...state,
                basket: []
            };

        case "DELETE_ITEM":
            return {
                ...state,
                basket: action.payload
            };

        case "TOTAL_SUM":
            return {
                ...state,
                totalSum: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
