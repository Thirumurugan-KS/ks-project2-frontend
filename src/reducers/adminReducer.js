import { ADMIN_LOGIN_INITIAL,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE, 
    VENDOR_LOGOUT_SUCCESS, ADMIN_LOGOUT_SUCCESS } from '../constants/loginConstants'
import { ADMIN_ADDUSER_FAILURE, ADMIN_ADDUSER_INITIAL, ADMIN_ADDUSER_SUCCESS, ADMIN_VIEWUSER_FAILURE, ADMIN_VIEWUSER_INITIAL, ADMIN_VIEWUSER_SUCCESS } from '../constants/userConstants'


export const adminLoginReducer = (state = { adminDetail : {} },action) =>{

    switch(action.type){
        case ADMIN_LOGIN_INITIAL :
            return {
                loading1 : true
            }
        case ADMIN_LOGOUT_SUCCESS:
                return {
                    adminDetail : null
                }
        case ADMIN_LOGIN_SUCCESS :
            return {
                loading1 : false,
                adminDetail : action.payload
            }
        case ADMIN_LOGIN_FAILURE :
            return {
                loading1 : false,
                error1 : action.payload
            }
        default :
            return {
                ...state
            }
    }

}

export const adminAddUserReducer = ( state = {} , action) =>{

    switch(action.type){
        case ADMIN_ADDUSER_INITIAL :
            return {
                loading : true
            }
        case ADMIN_ADDUSER_SUCCESS:
                return {
                    loading : false,
                    success : true
                }
        case ADMIN_ADDUSER_FAILURE:
                return {
                    error : action.payload
                }

        default : 
                return{
                    ...state
                }  

}

}


export const adminViewUserReducer = ( state = { userDetail : []} , action) =>{

    switch(action.type){
        case ADMIN_VIEWUSER_INITIAL:
            return {
                loading : true
            }
        case ADMIN_VIEWUSER_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    userDetail : action.payload
                }
        case ADMIN_VIEWUSER_FAILURE:
                return {
                    error : action.payload
                }

        default : 
                return{
                    ...state
                }  

}
}