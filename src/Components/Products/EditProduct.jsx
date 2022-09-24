import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// style scss
import './_products.scss'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const navigate = useNavigate()
    const [item, setItem] = useState({ id: id, name: "", price: "" })

    useEffect(() => {
        {
            storeData.products.filter(products => products.id === id).map((item) => {
                return (setItem({ id: id, name: `${item.name}`, price: `${item.price}`, quantity: 1, img: `${item.img}` }))
            })
        }
    },[])

    const updateProduct = () => {
        const action = { type: "UPDATEPRODUCT", payload: item }
        dispatch(action);
    }

    const deleteProduct = () => {
        const action = { type: "DELETEPRODUCT", payload: id }
        dispatch(action);
        navigate('/products')
    }

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
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
                <div>
                    <Button onClick={updateProduct} variant="contained" endIcon={<DriveFileRenameOutlineIcon/>}>Update</Button>
                    <Button onClick={deleteProduct} variant="outlined" startIcon={<DeleteIcon/>}>Delete</Button>
                </div>
            </div>

            <div className="product p-4 p-md-5 my-3 mx-md-5">
                <p className='display-4 '>Purchases History</p>
                {storeData.purchases.filter(purchases => purchases.productId === id).map((Purchase, index) => {
                    return (<div key={index} style={{ margin: "2rem", padding: "2rem", border: "2px solid black", borderRadius: "10px" }}>
                        <p><strong>Customer ID: </strong><Link to={`/editCustomer/${Purchase.customerId}`}>{Purchase.customerId}</Link></p>
                        <p><strong>Purchase ID: </strong>{Purchase.id}</p>
                        <p><strong>Purchase Date: </strong>{Purchase.date}</p>
                    </div>
                    )
                })}
            </div>
            <br />
            <br />

        </Container>
    )
}
