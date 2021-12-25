import { PRODUCT_INITIAL, PRODUCT_SUCCESS,PRODUCT_FAILURE, PRODUCT_ACCEPT_INITIAL, PRODUCT_ACCEPT_SUCCESS, PRODUCT_ACCEPT_FAILURE, ACCEPT_INITIAL, ACCEPT_SUCCESS, ACCEPT_FAILURE, REJECT_INITIAL, REJECT_SUCCESS, REJECT_FAILURE, VENDOR_PRODUCT_INITIAL, VENDOR_PRODUCT_SUCCESS, VENDOR_PRODUCT_FAILURE } from '../constants/productConstants'
import { UPLOAD_FAILURE, UPLOAD_INITIAL, UPLOAD_SUCCESS } from '../constants/productConstants'

import axios from "axios"

export const productAction = () => async(dispatch)=>{

    
    try {

        dispatch({
            type : PRODUCT_INITIAL
        })
      
        const { data } = await axios.get("https://ksproject2-backend.herokuapp.com/api/")

    
            dispatch({
                type : PRODUCT_SUCCESS,
                payload : data
            })
        
    } catch (error) {

        dispatch({
            type : PRODUCT_FAILURE,
            payload : error
        })
        
    }
    


}

export const productViewAcceptAction = () => async(dispatch,getState)=>{

    
    try {

        dispatch({
            type : PRODUCT_ACCEPT_INITIAL
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

        console.log(config)
      
        const { data } = await axios.get("https://ksproject2-backend.herokuapp.com/api/admin/approve/action" , config)

        console.log(data)

    
            dispatch({
                type : PRODUCT_ACCEPT_SUCCESS,
                payload : data
            })
        
    } catch (error) {

        dispatch({
            type : PRODUCT_ACCEPT_FAILURE,
            payload : error
        })
        
    }
    


}

export const acceptAction = (value) => async(dispatch,getState)=>{

    
    try {

        dispatch({
            type : ACCEPT_INITIAL
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
      
        const { data } = await axios.put("https://ksproject2-backend.herokuapp.com/api/admin/product/approve" ,JSON.stringify(value),config)


    
            dispatch({
                type : ACCEPT_SUCCESS,
                payload : data
            })

            dispatch(productAction())

        
            dispatch(productViewAcceptAction())


        
    } catch (error) {

        dispatch({
            type : ACCEPT_FAILURE,
            payload : error
        })
        
    }
    


}

export const rejectAction = (value) => async(dispatch,getState)=>{

    
    try {

        dispatch({
            type : REJECT_INITIAL
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
      
        const { data } = await axios.put("https://ksproject2-backend.herokuapp.com/api/admin/product/reject" ,JSON.stringify(value),config)


    
            dispatch({
                type : REJECT_SUCCESS,
                payload : data
            })

            dispatch(productAction())
        
            dispatch(productViewAcceptAction())


        
    } catch (error) {

        dispatch({
            type : REJECT_FAILURE,
            payload : error
        })
        
    }
    


}

export const addProductAction = (value) => async(dispatch, getState)=>{

    try {

        dispatch({
            type : UPLOAD_INITIAL
        })

        const {vendorUser} = getState()
        const {vendorDetail } = vendorUser
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization : `Bearer ${vendorDetail.token}`
            }
        }

        console.log(value)
    
        const { data } = await axios.post('https://ksproject2-backend.herokuapp.com/api/vendor/create/product',value,config)

       
        dispatch(vendorProductAction())

        dispatch({
            type : UPLOAD_SUCCESS
        })



    }

    catch (error) {

        dispatch({
            type : UPLOAD_FAILURE,
            payload : error.message

        })
        
    }

}

export const vendorProductAction = () => async(dispatch,getState)=>{

    
    try {

        dispatch({
            type : VENDOR_PRODUCT_INITIAL
        })

        const {vendorUser} = getState()
        const {vendorDetail } = vendorUser


        let config = {
            headers: {
                'Content-Type': 'application/json',
                authorization : `Bearer ${vendorDetail.token}`
            }
        }
      
        const { data } = await axios.get("https://ksproject2-backend.herokuapp.com/api/vendor/product/createdby",config)

    
            dispatch({
                type : VENDOR_PRODUCT_SUCCESS,
                payload : data
            })
        
    } catch (error) {

        dispatch({
            type : VENDOR_PRODUCT_FAILURE,
            payload : error
        })
        
    }
    


}