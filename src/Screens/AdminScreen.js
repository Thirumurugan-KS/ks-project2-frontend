import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import AdminSidebar from '../Components/AdminSidebar'
import Products from '../Components/Products'
import { productAction } from '../actions/productAction'
import AdminDetail from '../Components/AdminDetail'
import ProductList from '../Components/ProductList'
export default function AdminScreen() {

    const adminUser = useSelector(state => state.adminUser)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { adminDetail } = adminUser


    useEffect(() => {   
        console.log(adminDetail)
        if(adminDetail===null){

            navigate("/login")

        }
     dispatch(productAction())
       
    },[adminDetail])


    const products = useSelector(state => state.products)

    const { productsDetail } = products

    return (
          <div className='admin-screen'>
            <Row>
            <Col>
            <AdminSidebar value="viewproduct"/>
            </Col>
            <Col md={9}>
            <AdminDetail/>
            <div className='product-menu'>
            <br/>
             <ProductList/>
            </div>
            </Col>
            </Row> 
        </div>
        
    )
}
