import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  {combineReducers,applyMiddleware  } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});



const cartItemsFromStorage = localStorage.getItem("cartItems") ? 
    JSON.parse(localStorage.getItem("cartItems")) : [];

export const initialState ={
    cart:{
        cartItems : cartItemsFromStorage
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

  