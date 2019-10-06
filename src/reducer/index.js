const reducer = (
    state = {
        basket: JSON.parse(localStorage.getItem('belvideo.by')) || [],
        countBasket: 0,
        totalSum: 0
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
                basket: []
            };

        case "DELETE_ITEM":
            return {
                ...state,
                basket: action.payload
            };

        case "COUNT_BASKET":
            return {
                ...state,
                countBasket: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
