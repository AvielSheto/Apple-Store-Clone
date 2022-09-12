import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
// bootstrap
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function EditCustomer() {
    const storeData = useSelector(state => state)
    const { id } = useParams();
    const dispatch = useDispatch()
    const [customer, setCustomer] = useState({id: id, first:"", last:"", city:""});

    const updateCustomer = ()=>{
        const action = { type: "UPDATECUSTOMER", payload: customer }
        dispatch(action)
    }
    const deleteCustomer = ()=>{
        const action = { type: "DELETECUSTOMER", payload: customer.id }
        dispatch(action)
    }

    const handleChange = (e)=>{
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <div className='customer'>
                <Typography variant="h3" >Edit Customer</Typography>
                <br />
                <h3>Customer ID : {id}</h3>

                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <TextField onChange={handleChange} name='first' label="First Name:" variant="outlined" />
                    <br />
                    <TextField onChange={handleChange} name='last' label="Last Name:" variant="outlined" />
                    <br />
                    <TextField onChange={handleChange} name='city' label="City:" variant="outlined" />
                </div>

                <Form>
                    <br />
                    <div style={{ display: 'flex', justifyContent: "space-evenly", padding: "0px 30%" }}>
                        <Button onClick={updateCustomer} variant="contained" endIcon={<DriveFileRenameOutlineIcon />}>Update</Button>
                        <Button onClick={deleteCustomer} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                    </div>
                </Form>
            </div>

            <div className='customer' >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h4">purchases History</Typography>
                </div>

                {storeData.purchases.filter(purchases => purchases.customerId === id).map((Purchase, index) => {
                    return (<div key={index} style={{ margin: "2rem", padding: "2rem", border: "2px solid black", borderRadius: "10px" }}>
                        <Link style={{float:"right"}} to={`/editProduct/${Purchase.productId}`}><Fab color="info" aria-label="edit"><EditIcon /></Fab></Link>
                        <p><strong>Product ID: </strong><Link to={`/editProduct/${Purchase.productId}`}>{Purchase.productId}</Link></p>
                        <p><strong>Purchase Date: </strong>{Purchase.date}</p>
                    </div>)
                })}
            </div>
            <br />
            <br />
        </Container>
    )
}