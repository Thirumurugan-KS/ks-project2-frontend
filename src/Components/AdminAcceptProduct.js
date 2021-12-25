import React , { useState,useEffect} from 'react'
import { Button, Col, Row , Form , Table , Image} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { acceptAction, productViewAcceptAction, rejectAction } from '../actions/productAction'
import ReactLoading from "react-loading";
import Message from './Message';

export default function AdminAcceptProduct() {

    const dispatch = useDispatch()


    const productViewAccept = useSelector(state => state.productViewAccept)

    const { loading , error , productsViewAcceptDetail } = productViewAccept

    const [productsLength, setproductsLength] = useState(0)


    const acceptHandle = (id) =>{

        const value = {
            id : id
        }

        dispatch(acceptAction(value))
        

    }

    const rejectHandle = (id) =>{

        const value = {
            id : id
        }

        dispatch(rejectAction(value))
        

    }


    const lengthAccept = ()=> {
        
        return productsViewAcceptDetail.reduce(function (accumulator, prod) {
            return accumulator + 1;
        }, 0);
        
    }



    useEffect(() => {

         dispatch(productViewAcceptAction())
        
        
    }, [])

    

    

    return (
        <div>
            
            { loading ? <ReactLoading color='black' type='cylon' className='loading'/> 
            : error ? <Row className="m-3"><Message variant="danger">Error occured</Message></Row>
            : <div className='table-data'>
                <Table striped bordered hover>
                {console.log(productsLength)}
            <thead>
                <tr>
                    <th>
            Products
            </th>
            <th>
            Name
            </th>
            <th>
                Description
            </th>
            <th>
            Accept
            </th>
            <th>
            Reject
            </th>
                </tr>
            </thead>
                { productsViewAcceptDetail.map(prod =>{
                    return(
                        <tbody key={prod._id}>
                        <tr className="text-center">
                            <td className='img-accept'>
                                <Image className="accept-img" src={prod.image.secure_url} fluid rounded/>
                            </td>
                            <td>
                                <p>{prod.name}</p>
                            </td>
                            <td>
                                <p>{prod.description}</p>
                            </td>
                            <td>
                                <Button className="bg-success" onClick={e => acceptHandle(prod._id)}>Accept</Button>
                            </td>
                            <td>
                                <Button className="bg-danger" onClick={e => rejectHandle(prod._id)}>Reject</Button>
                            </td>
                        </tr>
                         </tbody>
                    )
                })}    
        </Table>
                </div>
            }


        </div>
        
    )
}
