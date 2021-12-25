import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FiUserPlus } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { SiProducthunt } from 'react-icons/si'
import { Link } from 'react-router-dom';

export default function AdminSidebar({value}) {

    return (
        <Col className='bg-dark text-white flex-adminbar admin-side-bar'>
                <Row className='admin-row'>
                <Link  to="/admin/adduser" style={{ textDecoration: 'none' , color : 'white'}} className={ value==='adduser' ? 'text-success' : ''} id="adduser"><FiUserPlus/> - Add user</Link>
                </Row>
                <Row className='admin-row'>
                <Link to="/admin/viewuser" style={{ textDecoration: 'none' , color : 'white'}} className={ value==='viewuser' ? 'text-success' : ''} ><FaUserCircle></FaUserCircle> - View user</Link>
                </Row>
                <Row className='admin-row'>
                <Link to="/admin/acceptproduct" style={{ textDecoration: 'none' , color : 'white'}} className={ value==='acceptproduct' ? 'text-success' : ''} ><MdProductionQuantityLimits></MdProductionQuantityLimits> - Accept Product</Link>
                </Row>
                <Row className='admin-row'>
                <Link to="/admin/" style={{ textDecoration: 'none' , color : 'white'}} className={ value==='viewproduct' ? 'text-success' : ''}><SiProducthunt/> - View Product</Link>
                </Row>
                </Col>
                
    )
}
