import React, { useEffect } from 'react'
import { Button, Col, Row , Form ,Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { adminViewUserAction } from '../actions/adminAction'
import ReactLoading from "react-loading";
import Message from './Message';

export default function AdminViewUser() {

    const dispatch = useDispatch()
    const viewUser = useSelector(state => state.viewUser)

    const { loading , error , userDetail } = viewUser

    let userLenght

    useEffect(() => {

        dispatch(adminViewUserAction())
        
    }, [])



    return (
        <div>
            { loading ? <ReactLoading color='black' type='cylon' className='loading'/> 
            : error ? <Row className="m-3"><Message variant="danger">Error occured</Message></Row>:
             <div className="table-data">
                 <Table striped bordered hover>
            <thead>
            <tr>
            <th>
            Name
            </th>
            <th>
            Email
            </th>
            <th>
            Password
            </th>
            <th>
            Role
            </th>
            <th>
            District
            </th>
                </tr>
    
            
            </thead>
            
            { userDetail && userDetail.map(user => {
            return(
                <tbody key={user._id}>
                <tr className="m-3">
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>*Encrypted*</td>
                    <td>{user.role}</td>
                    <td>{user.district}</td>
                </tr>
                </tbody>
            )
        }) }
           
        </Table>
                 </div> }
            
        </div>
    )
}
