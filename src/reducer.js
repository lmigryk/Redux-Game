import {createStore} from  'redux';

const reducer = (state,action) => {
    if (action.type ==="ADD_TO_INVENTARY"){
        var total = state.cart.reduce((sum, item) => sum + item.price, 0);
        if (state.cart.concat(action.item).length < 6 && total<20000-action.item.price) {
            return {
                ...state,
                cart: state.cart.concat(action.item)
            }
        }
    }

    else if (action.type ==="DELETE_TO_INVENTARY"){
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.item.id)
        }
    }

    return state;
}

export default createStore(reducer,{cart: []});