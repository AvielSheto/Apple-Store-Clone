import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';





export default function EditProduct() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const storeData = useSelector(state => state);
    const [item, setItem] = useState({ id: id, name: "", price: "", quantity: "" })

    const updateProduct = () => {
        const action = { type: "UPDATEPRODUCT", payload: item }
        dispatch(action)
    }

    const deleteProduct = () => {
        const action = { type: "DELETEPRODUCT", payload: id }
        dispatch(action)
    }

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    return (
        <Container >
            <div className="regionOne" style={{ margin: "2rem", padding: "2rem", border: "2px solid black", borderRadius:"15px"}}>
                <h1 style={{ textAlign: "center" }}>Edit Product</h1>
                <h4>Updating product ID: {id} </h4>

                <div style={{display:'flex', flexDirection:"column"}}>
                    <TextField onChange={handleChange} name='name' label="Name:" variant="outlined" />
                    <br />
                    <TextField onChange={handleChange} name='price' label="Price:" variant="outlined" />
                </div>
                

                <br />
                <div style={{ display: 'flex', justifyContent: "space-evenly", padding:"0px 30%"}}>
                    <Button onClick={updateProduct} variant="contained">Update</Button>
                    <Button onClick={deleteProduct} variant="contained">Delete</Button>
                </div>
            </div>

            <div className="regionTwo" style={{ margin: "2rem", padding: "2rem", border: "2px solid black" , borderRadius:"15px"  }}>
                <h3 style={{ textAlign: 'center' }}>Purchases History</h3>
                {storeData.purchases.filter(purchases => purchases.productId === id).map((Purchase, index) => {
                    return (<div key={index} style={{ margin: "2rem", padding: "2rem", border: "2px solid black" }}>
                        <p><strong>Customer ID: </strong><Link to={`/editCustomer/${Purchase.customerId}`}>{Purchase.customerId}</Link></p>
                        <p><strong>Purchase ID: </strong>{Purchase.id}</p>
                        <p><strong>Purchase Date: </strong>{Purchase.date}</p>
                    </div>
                    )
                })}

            </div>
        </Container>
    )
}
