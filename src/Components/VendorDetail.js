import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Row , Col, Button} from 'react-bootstrap'
import { vendorLogoutAction } from '../actions/vendorAction'
import { useNavigate } from 'react-router-dom'


export default function VendorDetail() {

    const vendorUser = useSelector(state => state.vendorUser)

    const { vendorDetail } = vendorUser

    
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleClick = () =>{
        dispatch(vendorLogoutAction())
        navigate("/login")
    }
    return (
        <div>
            <Row className='m-3 bg-success text-white '>
               <div className='admin-detail'>
               <p>Welcome {vendorDetail.name}!!!</p>
              
              
              <Button className='bg-dark' onClick={handleClick}>Log out</Button>
               </div>
                
              
                </Row>
        </div>
    )
}
