import React , { useEffect} from 'react'
import { Nav , Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { productAction } from '../actions/productAction'
import ProductList from '../Components/ProductList'
import image from '../Image/heroimage.svg'


export default function HomeScreen() {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(productAction())
        
    }, [])

    const products = useSelector(state => state.products)

    const { productsDetail } = products

    return (
        <div className='container-fluid'>
            <Nav className="navitem">
            <Nav.Item>
                <Link to="/" style={{ textDecoration: 'none' , color : '#4DD637'}}><h5>Products</h5></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/login" style={{ textDecoration: 'none', color : 'white' }}>Login</Link>
            </Nav.Item>
            </Nav>
            <div className='product-menu'>
            <br/>
               <ProductList/>
            </div>
            
            
            
        </div>
    )
}
