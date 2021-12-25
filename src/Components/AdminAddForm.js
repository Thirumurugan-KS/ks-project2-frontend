import React , { useState } from 'react'
import { Button, Col, Row , Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { adminAddUserAction } from '../actions/adminAction'
import Message from '../Components/Message'
import ReactLoading from "react-loading"
import validator from "email-validator"

export default function AdminAddForm() {


    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [role, setrole] = useState('admin')
    const [district, setdistrict] = useState('')
    const [initial, setinitial] = useState(true)
    const [errorFill, seterror] = useState(false)
    const [errorMessage, seterrorMessage] = useState('')

    const dispatch = useDispatch()

    const clickHandler = (e) =>{
        e.preventDefault()
        if(name && password && email && district && role){

            if(validator.validate(email)){
            seterror(false)
            const value = {
                name : name,
                password : password,
                email : email,
                district : district,
                role : role
            }
            setname("")
            setpassword("")
            setdistrict("")
            setemail("")
            dispatch(adminAddUserAction(value))
            setinitial(false)
            }
            else{
              seterrorMessage("Kindly provide email id")
              seterror(true)

            }
            
        }
        else{
            seterrorMessage("Fill all the values")
            seterror(true)
        }
    }

    const addUser = useSelector(state => state.addUser)

    const { loading , error, success } = addUser

    return (

        <Row className='m-3'>

            {errorFill ? <Message variant="danger">{errorMessage}</Message> : " "}
            {initial ? " " : loading ? <ReactLoading type='cylon' className='loading'color='black'/> : error ? <p className='text-center'>Already user is there</p> : success ? <Message variant="success">Successfully added</Message> : " "}
            <Form>

    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" 
    value={name} onChange={e=> setname(e.target.value)} required={true}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
    value={email} onChange={e=> setemail(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={password} onChange={e=>setpassword(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicRole">
    <Form.Label>Role</Form.Label>
    <Form.Select
    value={role} onChange={e=>setrole(e.target.value)}>
    <option value="vendor">Vendor</option>
    <option value="admin">Admin</option>
  </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDistrict">
    <Form.Label>District</Form.Label>
    <Form.Control type="text" placeholder="District" 
    value={district} onChange={e=>setdistrict(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={clickHandler}>
    Add User
  </Button>
</Form>
            </Row>
    )
}
