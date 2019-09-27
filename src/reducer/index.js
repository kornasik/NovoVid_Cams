const reducer = (
    state = {
        basket: [],
        basketCount: 0
    }
    , action) => {
    switch (action.type) {
        case "ADD_BASKET":
            return {
                ...state,
                basket: action.payload
            };

        case "CLEAR_BASKET":
            return {
                ...state,
                basket: [],
                basketCount: 0
            };

        case "DELETE_ITEM":
            return {
                ...state,
                basket: action.payload
            };

        case "AMOUNT_ADD":
            return {
                ...state,
                basket: action.payload
            };

        case "AMOUNT_DELETE":
            return {
                ...state,
                basket: action.payload
            };

        case "BASKET_COUNT":
            return {
                ...state,
                basketCount: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
