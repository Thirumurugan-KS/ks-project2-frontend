import { VENDOR_LOGIN_INITIAL,VENDOR_LOGIN_SUCCESS,VENDOR_LOGIN_FAILURE, ADMIN_LOGOUT_SUCCESS, VENDOR_LOGOUT_SUCCESS } from '../constants/loginConstants'


export const vendorLoginReducer = (state = { adminDetail : {} },action) =>{

    switch(action.type){
        case VENDOR_LOGIN_INITIAL :
            return {
                loading2 : true
            }
        
        case VENDOR_LOGOUT_SUCCESS:
                return {
                    vendorDetail : null
                }
        case VENDOR_LOGIN_SUCCESS :
            return {
                ...state,
                loading2 : false,
                vendorDetail : action.payload
            }
        case VENDOR_LOGIN_FAILURE :
            return {
                
                ...state,
                loading2 : false,
                error2 : action.payload
            }
        default :
            return {
                ...state
            }
    }

}