import React, { useEffect } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { Button, Col, Row , Form ,Table} from 'react-bootstrap'
import AdminDetail from '../Components/AdminDetail'
import AdminAddForm from '../Components/AdminAddForm'
import { useDispatch, useSelector } from 'react-redux'

import AdminViewUser from '../Components/AdminViewUser'

export default function AdminViewUserScreen() {

    return (
        <div className='container-fluid admin-screen'>
           <Row>
                <Col md={3}>

                <AdminSidebar value="viewuser"/>
                </Col>
            
            <Col md={9}>
            <AdminDetail/>
            <AdminViewUser/>
            </Col>
            </Row>
            </div>
    )
}
