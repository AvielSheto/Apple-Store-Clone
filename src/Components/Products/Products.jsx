import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TotalPurchases from './TotalPurchases';
// style scss
import './_products.scss'
// mui
import Typography from '@mui/material/Typography';
import AllCustomers from './AllCustomers';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';


export default function Products() {
    const storeData = useSelector((state) => state);
    return (
        <div>
            <Container>
                <div className='allProducts'>
                    <Typography style={{ textAlign: 'left' }} variant="h3" >All Products</Typography>
                    <TotalPurchases />
                </div>

                {storeData.products.map((item, index) => {
                    let ProductId = item.id
                    return (<div key={index} className="product">
                        <div className='product'>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography style={{ textAlign: 'left' }} variant="h4" gutterBottom>Product ID: {item.id}</Typography>
                                <Divider />
                                <Link to={`/editProduct/${item.id}`}><Fab size="medium" color="primary" aria-label="edit"><EditIcon /></Fab></Link>
                            </div>
                            <br />
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <div>
                                    <br />
                                    <Typography style={{ textAlign: 'left' }} variant="h6" gutterBottom><strong>Product ID: </strong>{item.name}</Typography>
                                    <Typography style={{ textAlign: 'left' }} variant="h6" gutterBottom><strong>Product Price: </strong>{item.price}</Typography>
                                    <Typography style={{ textAlign: 'left' }} variant="h6" gutterBottom><strong>Quantity: </strong>{item.quantity}</Typography>

                                </div>
                                <div>
                                    <img style={{ height: "12rem", width: "16rem" }} src={item.img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='product' >
                            <Typography style={{ textAlign: 'left' }} variant="h3" >Product Purchases: </Typography>
                            <br />
                            <AllCustomers id={ProductId} />
                            <br />
                        </div>
                    </div>
                    )
                })}
                <br />
                <br />
            </Container>
        </div>
    )
}
