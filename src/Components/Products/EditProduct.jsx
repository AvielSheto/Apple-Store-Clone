import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// style scss
import './_products.scss';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import '../sign/_loading.scss'

export default function EditProduct() {
    const storeData = useSelector((state) => state);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({ id: id, name: "", price: "" });

    useEffect(() => {
        {
            storeData.products.filter(products => products.id === id).map((item) => {
                return (setItem({ id: id, name: `${item.name}`, price: `${item.price}`, quantity: 1, img: `${item.img}` }));
            })
        }
    }, []);

    const updateProduct = () => {
        const action = { type: "UPDATEPRODUCT", payload: item };
        dispatch(action);
        navigate('/products');
    }

    const deleteProduct = () => {
        const action = { type: "DELETEPRODUCT", payload: id };
        dispatch(action);
        navigate('/products');
    }

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    return (
        <Container >
            <div className="product p-4 p-md-5 my-3 mx-md-5" >
                <p className='display-4 fw-normal'>Edit Product</p>
                <p className='display-6 fs-1'>Updating product ID: {id} </p>
                <br />
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <TextField onChange={handleChange} name='name' label="Name:" variant="outlined" />
                    <br />
                    <TextField onChange={handleChange} name='price' label="Price:" variant="outlined" />
                </div>
                <br />
                <div className='d-flex justify-content-center'>
                    <Button className='mx-2' onClick={updateProduct} variant="contained" endIcon={<DriveFileRenameOutlineIcon />}>Update</Button>
                    <Button className='mx-2' onClick={deleteProduct} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </div>
            </div>

            <div className="product p-4 p-md-5 my-3 mx-md-5">
                <p className='display-4 '>Purchases History</p>
                <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <th>purchase ID</th>
                            <th>Customer ID</th>
                            <th>Purchase Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storeData.purchases.filter(purchases => purchases.productId === id)?.map((purchase, index) => {
                            return (
                                <tr key={index}>
                                    <td>{purchase.id}</td>
                                    <td><Link to={`/editProduct/${purchase.customerId}`}> {purchase.customerId}</Link></td>
                                    <td>{purchase.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <br />
            <br />

        </Container>
    )
}
