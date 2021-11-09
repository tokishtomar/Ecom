import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';
import Cookies from 'js-cookie';
// import Cookie from 'js-cookie';

// const cartItems = Cookies.getJSON('cartItems') || [];
// const userInfo = Cookies.getJSON('userInfo') || null;

// const initialState = { cart: { cartItems, shipping:{}, payment: {}}, userSignin: { userInfo } };
const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;