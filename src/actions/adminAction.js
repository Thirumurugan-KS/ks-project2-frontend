import { ADMIN_LOGIN_INITIAL,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE, VENDOR_LOGOUT_SUCCESS, ADMIN_LOGOUT_SUCCESS } from '../constants/loginConstants'
import axios from "axios"
import { ADMIN_ADDUSER_FAILURE, ADMIN_ADDUSER_INITIAL, ADMIN_ADDUSER_SUCCESS, ADMIN_VIEWUSER_FAILURE, ADMIN_VIEWUSER_INITIAL, ADMIN_VIEWUSER_SUCCESS } from '../constants/userConstants'

export const adminLoginAction = (value) => async(dispatch)=>{

    try {

        dispatch({
            loading1 : true,
            type : ADMIN_LOGIN_INITIAL
        })

        dispatch({
            type : VENDOR_LOGOUT_SUCCESS
        })
    
        let config = {
            headers: {
                ACCEPT : 'application/json',
                'Content-Type': 'application/json'
            }
        }

        console.log(value)
    
        const { data } = await axios.post("https://ksproject2-backend.herokuapp.com/api/admin/signin",JSON.stringify(value),config)

        localStorage.setItem('adminDetail' , JSON.stringify(data))
    
            dispatch({
                loading : false,
                type : ADMIN_LOGIN_SUCCESS,
                payload : data
            })
        
    } catch (error) {

        dispatch({
            type : ADMIN_LOGIN_FAILURE,
            payload : error
        })
        
    }

    

}


export const adminLogoutAction = () => async(dispatch)=>{

    localStorage.removeItem('adminDetail')
    dispatch({
        type : ADMIN_LOGOUT_SUCCESS
    })
}


export const adminAddUserAction = (value) => async(dispatch, getState)=>{

    try {

        dispatch({
            type : ADMIN_ADDUSER_INITIAL
        })

        const {adminUser} = getState()
        const {adminDetail } = adminUser
        let config = {
            headers: {
                ACCEPT : 'application/json',
                'Content-Type': 'application/json',
                authorization : `Bearer ${adminDetail.token}`
            }
        }

        console.log(value)
    
        const { data } = await axios.post("https://ksproject2-backend.herokuapp.com/api/admin/create/user",JSON.stringify(value),config)

        dispatch({
            type : ADMIN_ADDUSER_SUCCESS
        })



    }

    catch (error) {

        dispatch({
            type : ADMIN_ADDUSER_FAILURE,
            payload : error.message

        })
        
    }

}


export const adminViewUserAction = () => async(dispatch, getState)=>{

    try {

        dispatch({
            type : ADMIN_VIEWUSER_INITIAL
        })

        const {adminUser} = getState()
        const {adminDetail } = adminUser
        let config = {
            headers: {
                ACCEPT : 'application/json',
                'Content-Type': 'application/json',
                authorization : `Bearer ${adminDetail.token}`
            }
        }

    
        const { data } = await axios.get("https://ksproject2-backend.herokuapp.com/api/admin/user/view",config)

        console.log(data)


        dispatch({
            type : ADMIN_VIEWUSER_SUCCESS,
            payload : data
        })



    }

    catch (error) {

        dispatch({
            type : ADMIN_VIEWUSER_FAILURE,
            payload : error.message

        })
        
    }

}


