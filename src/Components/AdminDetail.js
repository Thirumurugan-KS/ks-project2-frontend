import React, { useEffect } from 'react'
import { Button ,Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { adminLogoutAction } from '../actions/adminAction'
import { productAction } from '../actions/productAction'

export default function AdminDetail() {

    const adminUser = useSelector(state => state.adminUser)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { adminDetail } = adminUser

    const handleClick = () =>{
        dispatch(adminLogoutAction())
        navigate("/login")
    }

    return (
            <Row className='m-3 bg-success text-white '>
               <div className='admin-detail'>
               <p>Welcome {adminDetail.name}!!!</p>
              <Button className='bg-dark' onClick={handleClick}>Log out</Button>
               </div>
            </Row>
    )
}

