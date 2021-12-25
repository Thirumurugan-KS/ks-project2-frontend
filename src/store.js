import {  createStore , combineReducers , applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools   } from "redux-devtools-extension"
import { adminAddUserReducer, adminLoginReducer, adminViewUserReducer } from "./reducers/adminReducer"
import { vendorLoginReducer } from "./reducers/vendorReducer"
import { addProductReducer, productReducer, productViewAcceptReducer, vendorProductReducer } from "./reducers/productReducer"


const reducer = combineReducers({

    adminUser : adminLoginReducer,
    vendorUser : vendorLoginReducer,
    products : productReducer,
    addUser : adminAddUserReducer,
    viewUser : adminViewUserReducer,
    productViewAccept : productViewAcceptReducer,
    addProduct : addProductReducer,
    vendorProduct : vendorProductReducer

})

const adminLoginfromLocalStorage = localStorage.getItem('adminDetail') ? JSON.parse(localStorage.getItem('adminDetail')) : null
const vendorLoginfromLocalStorage = localStorage.getItem('vendorDetail') ? JSON.parse(localStorage.getItem('vendorDetail')) : null
const initialState = {

    adminUser : {
        adminDetail : adminLoginfromLocalStorage
    },
    vendorUser : {
        vendorDetail : vendorLoginfromLocalStorage
    },
    products : {
        productsDetail : []
    },
    viewUser : {
        userDetail : null
    }

}

const middleware = [thunk]

const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(...middleware)))

export default store