import React , { useEffect } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { Button, Col, Row , Form , Table , Image} from 'react-bootstrap'
import AdminDetail from '../Components/AdminDetail'
import AdminAddForm from '../Components/AdminAddForm'
import AdminAcceptProduct from '../Components/AdminAcceptProduct'

export default function AdminAcceptProductScreen() {

    return (
        <div className='container-fluid admin-screen'>
           <Row>
                <Col md={3}>

                <AdminSidebar value="acceptproduct"/>
                </Col>
            
            <Col md={9}>
            <AdminDetail/>
           <AdminAcceptProduct/>
           
            </Col>
            </Row>
            </div>
    )
}
