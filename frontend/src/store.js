import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  {combineReducers,applyMiddleware  } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import {userLoginReducer , userRegisterReducer,userDetailsReducer, userUpdateProfileReducer} from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
});



const cartItemsFromStorage = localStorage.getItem("cartItems") ? 
    JSON.parse(localStorage.getItem("cartItems")) : [];

const userInfoFromStorage = localStorage.getItem("userInfo") ? 
    JSON.parse(localStorage.getItem("userInfo")) : null

export const initialState ={
    cart:{
        cartItems : cartItemsFromStorage
    },
    userLogin:{
        userInfo : userInfoFromStorage
    }
}

 
 
const middleware = [thunk];
 
const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});

export default store 


// export const store = configureStore({
//     reducer: {
//         reducer: rootReducer,
//     },
//   });




  
//   export type AppDispatch = typeof store.dispatch;
//   export type RootState = ReturnType<typeof store.getState>;
//   export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>

  