import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TotalPurchases from './TotalPurchases';
// style scss
import './_products.scss';
// mui
import AllCustomers from './AllCustomers';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function Products() {
    const storeData = useSelector((state) => state);
    return (
        <div>
            <Container>
                <div className='allProducts p-1 p-md-3 my-3 mx-md-5 d-flex justify-content-between align-items-center' >
                    <p className='display-4 px-4'>Products</p>
                    <TotalPurchases />
                </div>
                {storeData.products.map((item, index) => {
                    let ProductId = item.id
                    return (<div key={index} className="product p-2 p-md-4 my-1 mx-md-5">
                        <div className='product p-4 p-md-5 my-3'>
                            <div className='d-flex justify-content-between'>
                                <p className='display-6 fs-4'> <strong className='display-6 fw-normal fs-2'>Product ID: </strong>{item.id}</p>
                                <Link to={`/editProduct/${item.id}`}><Fab size="small" color="primary" aria-label="edit"><EditIcon /></Fab></Link>
                            </div>
                                <hr style={{width:"100%" ,textAlign:"center"}}/>
                            <div className='product p-2 p-md-4 d-sm-flex justify-content-between'>
                                <div className='p-1'>         
                                    <p className='display-6 fs-5'><strong className='fs-3'>Product Name: </strong>{item.name}</p>                           
                                    <p className='display-6 fs-5'><strong className='fs-3'>Product Price: </strong>{item.price}</p>                           
                                    <p className='display-6 fs-5'><strong className='fs-3'>Quantity: </strong>{item.quantity}</p>                           
                                </div>
                                <div>
                                    <img className='align-content-md-center mx-5 mx-md-0' style={{ height: "12rem", width: "16rem" }} src={item.img} alt="product" />
                                </div>
                            </div>
                        </div>
                        <div className='product p-3' >
                            <p className='display-4 px-3'>Product Purchases:</p>
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
