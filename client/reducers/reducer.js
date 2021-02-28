function someReducer(state, action) {
    switch(action.type) {
        case 'CARD_LIST':
            return {
                ...state,
                data: action.data
            }
        break;

        default:
            // the dispatched action is not in this reducer, return the state unchanged
            return state;
    } }
