import React, { useEffect, useState } from 'react'
import { Row, Col,Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { vendorProductAction } from '../actions/productAction'
import ReactLoading from "react-loading";
import Message from './Message';

export default function VendorProducts() {

    const dispatch = useDispatch()

    const vendorProduct = useSelector(state => state.vendorProduct)
    
    const { loading , error, productsDetail } = vendorProduct

    const [productsLength, setproductsLength] = useState(0)
    

    const lengthProduct = ()=> {
        
        if(productsDetail===null){
            return 0
        }
        else{

            return productsDetail.reduce(function (accumulator, prod) {
                return accumulator + 1;
            }, 0);

        }
        
    }
   

    useEffect(() => {

        dispatch(vendorProductAction())
        setproductsLength(lengthProduct())
        console.log(productsLength)
       
    }, [])

    

    return (
        <div>
            <Row className='m-3'>
                <Col md={12}>
                <h5>View Your Products :</h5>
                <hr/>
                </Col>
            </Row>
            { loading ? <ReactLoading type="cylon" className='loading' color='black'/> 
            : error ? <Message variant="danger">Error occured</Message> 
            :productsDetail ? productsDetail.map( prod =>{
                return(
                    <div key={prod._id} className='vendor-product p-3'>
                    <Row >
                        <Col md={2} sd={6} className='p-3'>
                        <Image className="heroimage1" src={prod.image.secure_url}/>
                        </Col>
                        <Col md={2} className='p-3'>
                            <h5 className='text-danger'>Name:</h5>
                            <p>{prod.name}</p>
                        </Col>
                        <Col className='p-3'>

                            <h5 className='text-danger'>Description:</h5>
                            <p>{prod.description}</p>
                        </Col>
                        <Col className='p-3'>

                        <h5 className='text-danger'>Acceptance Status:</h5>
                        {prod.approved==='true' ? <p className='text-success'>Approved</p> :<p className='text-warning'> Not Approved</p>}
                        </Col>
                        
                    </Row>
                    <Row>
                        <p>Created at : {prod.createdAt}</p>
                    </Row>
                    <hr/>
                    </div>
                )
            }) : " "}
        </div>
    )
}
