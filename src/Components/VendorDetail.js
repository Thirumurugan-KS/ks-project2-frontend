import React, { useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Row , Col, Button} from 'react-bootstrap'
import { vendorLogoutAction } from '../actions/vendorAction'
import { useNavigate } from 'react-router-dom'


export default function VendorDetail() {

    const vendorUser = useSelector(state => state.vendorUser)

    const { vendorDetail } = vendorUser

    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
          
        if(vendorDetail===null){

            navigate("/login")

        }
       
    }, [vendorUser])


    const handleClick = () =>{
        dispatch(vendorLogoutAction())
        navigate("/login")
    }
    return (
        (vendorDetail!=null) && <div>
            <Row className='m-3 bg-success text-white '>
               <div className='admin-detail'>
               <p>Name : {vendorDetail.name}!!!</p>
               <p>Email : {vendorDetail.email}</p>
               <p>District : {vendorDetail.district}</p>
              <Button className='bg-dark' onClick={handleClick}>Log out</Button>
               </div>
                </Row>
        </div>
    )
}
