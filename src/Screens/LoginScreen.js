import React, {useState , useEffect} from 'react'
import { Row ,Col, Form, Button, Nav } from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { adminLoginAction } from '../actions/adminAction'
import { vendorLoginAction } from '../actions/vendorAction'
import Message from '../Components/Message'
import ReactLoading from "react-loading";
import image from '../Image/heroimage.svg'

export default function LoginScreen() {

    const [user, setUser] = useState('admin')

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [initial, setinitial] = useState(true)

    const  dispatch = useDispatch()

    const handleSubmit = (event) =>{

        
        const value = {
            'email' : email,
            'password' : password
        }
        if(user==="admin"){

            event.preventDefault();
            setinitial(false)
            dispatch(adminLoginAction(value))

        }
        else if(user==='vendor'){
            event.preventDefault();
            setinitial(false)
            dispatch(vendorLoginAction(value))
            
        }
    }

    const adminUser = useSelector(state => state.adminUser)
    const vendorUser = useSelector(state => state.vendorUser)

    const { loading1 , error1 } = adminUser
    const { loading2 , error2 } = vendorUser

    useEffect(() => {
        navigatorFun()
    }, [adminUser,vendorUser])


    const navigatorFun = () =>{
        if(user==='admin'){

            
            const { adminDetail } = adminUser

            if(adminDetail){
               navigate("/admin")
            }

        }
        else if(user==='vendor'){

            
            const { vendorDetail } = vendorUser
            if(vendorDetail){
                navigate("/vendor")
            }

        }
    }


    return (
        <div className='container-fluid login-container'>
            
            <Row className="login-form">
            <Col md={3} sd={5} className='offset-md-3 text-center admin-login'>
            { initial ? " " : (loading1 || loading2) ? <ReactLoading type='cylon' className='loading'/>: error1 || error2 ? <Message variant="danger">Email or password is wrong</Message> : " "}
            <h3>Login</h3>
            <hr/>
            <div className="options">
            <span id="admin" className={`${user==='admin' ? "login-option" : ''}`} onClick={ e=>setUser('admin')}>Admin Login</span>
            <span id="vendor" className={`${user==='vendor' ? "login-option" : ''}`} onClick={e=> setUser('vendor')}>Vendor Login</span>
            </div>
            <br></br>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" 
            onChange={ e=> setEmail(e.target.value)}
            value={email}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={ e=> setPassword(e.target.value)}
            value={password}/>
             </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
             </Form.Group>
            <Button variant="success" type="submit" onClick={handleSubmit}>
            Login
            </Button>
            </Form>

            <Link to="/">
            Back
            </Link>
            </Col>
            <br/>
            <Col md={3} sd={4} className='offset-md-3 text-center vendor-login'>
            <img  className="heroimage" src={image}/>
            </Col>
            </Row>
        </div>
    )
}
