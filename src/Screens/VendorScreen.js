import React , { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { Row , Col, Button} from 'react-bootstrap'
import VendorDetail from '../Components/VendorDetail'
import ProductList from '../Components/ProductList'
import VendorForm from '../Components/VendorForm'
import VendorProducts from '../Components/VendorProducts'

export default function VendorScreen() {

    const vendorUser = useSelector(state => state.vendorUser)

    const navigate = useNavigate()

    const { vendorDetail } = vendorUser

    useEffect(() => {
          
        if(vendorDetail===null){

            navigate("/login")

        }
       
    }, [])

    return (
       <div className='container-fluid'>

        <Row>
        <VendorDetail/>
        <Col md={6}>
        <VendorForm/>
        </Col>
        <Col md={6}>
            <VendorProducts/>
        </Col>
        </Row>
        <Row className="m-3">
            <ProductList/>
        </Row>
       </div>
    )
}
