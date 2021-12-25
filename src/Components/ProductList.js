import React , { useEffect} from 'react'
import { Nav , Col, Row, Image, Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { productAction } from '../actions/productAction'
import Products from '../Components/Products'
import image from '../Image/heroimage.svg'
import Message from './Message'
import ReactLoading from "react-loading";

export default function ProductList() {

    const dispatch = useDispatch()

    let productsLenght

    useEffect(() => {

        dispatch(productAction())
        productsLenght = productsDetail.reduce(function (accumulator, prod) {
            return accumulator + 1;
        }, 0);
        
    }, [])

    const products = useSelector(state => state.products)

    const { loading , error , productsDetail } = products


     

    return (
        <div>
            { loading ? <ReactLoading type="cylon" className='loading' color='black'/> 
            : error ? <Message variant="danger">Error occured</Message> 
            : <div>
            <Row>
                <Col md={12}>
                <h5>View All Products :</h5>
                <hr/>
                </Col>
            </Row>
            { productsDetail.map(prod =>{
                return(
        <Row className='m-3' key={prod._id}>
        <br/>
        <Col md={2} className="offset-md-2 text-center product-listing">
        <Image  className="heroimage1" src={prod.image.secure_url} fluid rounded/>
        </Col>
        <Col md={6} className="offset-md-2 product-data">
        <br/>
        <h5 className='text-danger'>Name :</h5>
        <p>{prod.name}</p>
        <h5 className='text-danger'>Description :</h5>
        <p>{prod.description}</p>
        
        </Col>
        <br/>
        <hr/>
        </Row>

                )})}
            </div>}
         
        
        
    </div>
    )
}
