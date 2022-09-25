import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
// bootstrap
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export default function EditCustomer() {
    const storeData = useSelector(state => state)
    const { id } = useParams();
    const dispatch = useDispatch()
    const [customer, setCustomer] = useState({ id: id, first: "", last: "", city: "" });

    const updateCustomer = () => {
        const action = { type: "UPDATECUSTOMER", payload: customer }
        dispatch(action)
    }
    const deleteCustomer = () => {
        const action = { type: "DELETECUSTOMER", payload: customer.id }
        dispatch(action)
    }

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <div className='customer p-4 p-md-5 my-3 mx-md-5'>
                <p className='display-3 fw-normal'>Edit Customer</p>
                <p className='display-6 fs-1'>Customer ID: {id}</p>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <TextField onChange={handleChange} name='first' label="First Name:" variant="outlined" />
                    <br />
                    <TextField onChange={handleChange} name='last' label="Last Name:" variant="outlined" />
                    <br />
                    <TextField onChange={handleChange} name='city' label="City:" variant="outlined" />
                </div>

                <Form>
                    <br />
                    <div className='d-flex justify-content-center'>
                        <Button className='mx-2' onClick={updateCustomer} variant="contained" endIcon={<DriveFileRenameOutlineIcon />}>Update</Button>
                        <Button className='mx-2' onClick={deleteCustomer} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                    </div>
                </Form>
            </div>

            <div className='customer p-4 p-md-5 my-3 mx-md-5' >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p className='display-4'>purchases History</p>
                </div>

                <div className='purchased p-3 p-md-5 my-3 m-2 mx-md-5'>        
                    <Table striped bordered hover size="md">
                        <thead>
                            <tr>
                                <th>purchase ID</th>
                                <th>Product ID</th>
                                <th>Purchase Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {storeData.purchases.filter(purchases => purchases.customerId === id)?.map((purchase, index) => {
                                return (
                                    <tr key={index}>
                                        <td >{purchase.id}</td>
                                        <td><Link to={`/editProduct/${purchase.productId}`}>{purchase.productId}</Link></td>
                                        <td>{purchase.date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>

            </div>

            <br />
            <br />
        </Container>
    )
}
