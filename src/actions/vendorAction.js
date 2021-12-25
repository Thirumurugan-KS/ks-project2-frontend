import { VENDOR_LOGIN_INITIAL,VENDOR_LOGIN_SUCCESS,VENDOR_LOGIN_FAILURE, ADMIN_LOGOUT_SUCCESS, VENDOR_LOGOUT_SUCCESS } from '../constants/loginConstants'
import axios from "axios"

export const vendorLoginAction = (value) => async(dispatch)=>{

    try {

        dispatch({
            type : VENDOR_LOGIN_INITIAL
        })
    
        
        dispatch({
            type : ADMIN_LOGOUT_SUCCESS
        })

        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }


        console.log(value)
        
        const { data } = await axios.post("https://ksproject2-backend.herokuapp.com/api/vendor/signin",JSON.stringify(value),config)

    
            dispatch({
                type : VENDOR_LOGIN_SUCCESS,
                payload : data
            })
        
    } catch (error) {

        dispatch({
            type : VENDOR_LOGIN_FAILURE,
            payload : error
        })
        
    }
    


}


export const vendorLogoutAction = () => async(dispatch)=>{
    dispatch({
        type : VENDOR_LOGOUT_SUCCESS
    })
}

