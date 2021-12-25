import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction, vendorProductAction } from '../actions/productAction'
import Message from './Message'
import ReactLoading from "react-loading";

export default function VendorForm() {

    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [price, setprice] = useState('')
    const [photo, setphoto] = useState('')
    const [fillError, setfillError] = useState(false)
    const [initial, setinitial] = useState(true)
    const dispatch = useDispatch()

    

    const addProduct = useSelector(state => state.addProduct)

    const { loading , success , error } = addProduct



    const submitHandler = async(e) =>{

        e.preventDefault()    
  
        if(name && desc && price && photo)
        {
            const formData = new FormData();
        formData.append('name',name)
        formData.append('description',desc)
        formData.append('price',price)
        formData.append('photos', photo);

        dispatch(addProductAction(formData))
        setname("")
        setdesc("")
        setprice("")
        setphoto("")
        setfillError(false)
        setinitial(false)
        }
        else{
            setfillError(true)
        }


        
        
    }

    return (
        <>
        {initial ? " " : loading ? <ReactLoading type="cylon" className='loading' color='black'/> 
        : error ? <Row className='m-3'><Message variant="danger">Error occured</Message></Row>
        : success ? <Row className='m-3'><Message variant="success">Successfully Product Added</Message></Row>
        : " " }
        <Row className='m-3'>
            {fillError ? <p className='text-center text-danger'>Fill all the fields</p> : ""}
            <Col md={12}>
            <p>+ Add Product:</p> 
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
         <Form.Label column sm="2">
        Name
        </Form.Label>
        <Col sm="10">
        <Form.Control type="text" placeholder="Enter the name" value={name} onChange={ e => setname(e.target.value)}/>
        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
         <Form.Label column sm="2">
        Description
        </Form.Label>
        <Col sm="10">
        <Form.Control as="textarea" rows={3} placeholder="Enter the description" value={desc} onChange={ e => setdesc(e.target.value)}/>
        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
         <Form.Label column sm="2">
        Price
        </Form.Label>
        <Col sm="10">
        <Form.Control type="text" placeholder="price" value={price} onChange={ e => setprice(e.target.value)}/>
        </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formFile" className="mb-3">
        <Form.Label column sm="2">
        Image
        </Form.Label>
        <Col sm="10">
        <Form.Control type="file"  onChange={ e => setphoto(e.target.files[0])}/>
        </Col>
        </Form.Group>
        <Button className="bg-success m-3 offset-md-3" onClick={submitHandler}>Add Product</Button>
        </Form>
            </Col>
            
        </Row>
        </>
        
    )
}
