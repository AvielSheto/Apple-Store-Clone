import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TotalPurchases from './TotalPurchases';
// style scss
import './_products.scss';
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
                <div className='allProducts p-2 p-md-3 my-1 mx-md-5 d-flex justify-content-between' >
                    <Typography className='pe-1 text-black' variant="h4" >Products</Typography>
                    <TotalPurchases/>
                </div>
                {storeData.products.map((item, index) => {
                    let ProductId = item.id
                    return (<div key={index} className="product p-2 p-md-4 my-1 mx-md-5">
                        <div className='product p-4 p-md-5 my-3'>
                            <div className='d-flex justify-content-between'>
                                <Typography style={{ textAlign: 'left' }} variant="h4" >Product ID: {item.id}</Typography>
                                <Divider />
                                <Link to={`/editProduct/${item.id}`}><Fab size="medium" color="primary" aria-label="edit"><EditIcon /></Fab></Link>
                            </div>
                            <br />
                            <div className='d-md-flex justify-content-between'>
                                <div>
                                    <br />
                                    <Typography style={{ textAlign: 'left' }} variant="h6" gutterBottom><strong>Product ID: </strong>{item.name}</Typography>
                                    <Typography style={{ textAlign: 'left' }} variant="h6" gutterBottom><strong>Product Price: </strong>{item.price}</Typography>
                                    <Typography style={{ textAlign: 'left' }} variant="h6" gutterBottom><strong>Quantity: </strong>{item.quantity}</Typography>
                                </div>
                                <div>
                                    <img className='align-content-md-center mx-5 mx-md-0' style={{ height: "12rem", width: "16rem" }} src={item.img} alt="product" />
                                </div>
                            </div>
                        </div>
                        <div className='product p-3' >
                            <Typography style={{ textAlign: 'left' }} variant="h4" >Product Purchases: </Typography>
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
