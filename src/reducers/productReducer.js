import { PRODUCT_INITIAL, PRODUCT_SUCCESS,PRODUCT_FAILURE, PRODUCT_ACCEPT_INITIAL, 
    PRODUCT_ACCEPT_SUCCESS, PRODUCT_ACCEPT_FAILURE, ACCEPT_INITIAL, ACCEPT_SUCCESS, 
    ACCEPT_FAILURE, REJECT_INITIAL, REJECT_SUCCESS, REJECT_FAILURE, UPLOAD_INITIAL, 
    UPLOAD_SUCCESS, UPLOAD_FAILURE, VENDOR_PRODUCT_INITIAL, VENDOR_PRODUCT_SUCCESS, 
    VENDOR_PRODUCT_FAILURE } from '../constants/productConstants'


export const productReducer = (state = { productsDetail : [] },action) =>{

    switch(action.type){
        case PRODUCT_INITIAL :
            return {
                loading : true
            }
        case PRODUCT_SUCCESS :
            return {
                loading : false,
                productsDetail : action.payload
            }
        case PRODUCT_FAILURE :
            return {
                loading : false,
                error : action.payload
            }
        default :
            return {
                ...state
            }
    }

}


export const productViewAcceptReducer = (state = { productsViewAcceptDetail : [] },action) =>{

    switch(action.type){
        case PRODUCT_ACCEPT_INITIAL :
            return {
                loading : true
            }
        case PRODUCT_ACCEPT_SUCCESS :
            return {
                ...state,
                loading : false,
                productsViewAcceptDetail : action.payload
            }

        case PRODUCT_ACCEPT_FAILURE :
            return {
                loading : false,
                error : action.payload
            }
        default :
            return {
                ...state
            }
    }

}

export const acceptReducer = ( state = {} , action) =>{

    switch(action.type){
        case ACCEPT_INITIAL :
            return {
                loading : true
            }
        case ACCEPT_SUCCESS :
            return {
              
                loading : false,
                success : true
            }

        case ACCEPT_FAILURE :
            return {
                loading : false,
                error : action.payload
            }
        default :
            return {
                ...state
            }
    }

}

export const rejectReducer = ( state = {} , action) =>{

    switch(action.type){
        case REJECT_INITIAL:
            return {
                loading : true
            }
        case REJECT_SUCCESS :
            return {
              
                loading : false,
                success : true
            }

        case REJECT_FAILURE :
            return {
                loading : false,
                error : action.payload
            }
        default :
            return {
                ...state
            }
    }

}

export const addProductReducer = ( state = {} , action) =>{

    switch(action.type){
        case UPLOAD_INITIAL:
            return {
                loading : true
            }
        case UPLOAD_SUCCESS:
            return {
              
                loading : false,
                success : true
            }

        case UPLOAD_FAILURE:
            return {
                loading : false,
                error : action.payload
            }
        default :
            return {
                ...state
            }
    }


}

export const vendorProductReducer = (state = { productsDetail : [] },action) =>{

    switch(action.type){
        case VENDOR_PRODUCT_INITIAL :
            return {
                loading : true
            }
        case VENDOR_PRODUCT_SUCCESS :
            return {
                loading : false,
                productsDetail : action.payload
            }
        case VENDOR_PRODUCT_FAILURE:
            return {
                loading : false,
                error : action.payload
            }
        default :
            return {
                ...state
            }
    }

}

