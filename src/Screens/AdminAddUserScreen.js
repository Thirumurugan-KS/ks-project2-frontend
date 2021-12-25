import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { Button, Col, Row , Form} from 'react-bootstrap'
import AdminDetail from '../Components/AdminDetail'
import AdminAddForm from '../Components/AdminAddForm'
export default function AdminAddUserScreen() {
    return (
        <div className='container-fluid admin-screen'>
           <Row>
                <Col md={3}>

                <AdminSidebar value="adduser"/>
                </Col>
            
            <Col md={9}>
            <AdminDetail/>
            <AdminAddForm/>
            </Col>
            </Row>
            </div>
    )
}
