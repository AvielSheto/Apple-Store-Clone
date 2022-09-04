import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TotalPurchases from './TotalPurchases';
// mui
import Typography from '@mui/material/Typography';
import AllCustomers from './AllCustomers';
import Container from '@mui/material/Container';
import '../style/_products.scss'

export default function Products() {
    const storeData = useSelector((state) => state);
    return (
        <div>
            <Container>
                <div style={{ margin: "1rem", padding: "1rem 1rem", borderRadius: "15px", backgroundColor: "white", opacity: "0.8", textAlign: "center" }}>
                    <TotalPurchases />
                    <Typography style={{ textAlign: 'left' }} variant="h3" gutterBottom>All Products</Typography>
                </div>


                {storeData.products.map((item, index) => {
                    let ProductId = item.id
                    return (<div key={index} className="product">
                        <Typography style={{ textAlign: 'left' }} variant="h4" gutterBottom>Product ID: {item.id}</Typography>
                        <div style={{ display: 'flex', justifyContent: "space-between", padding: "1rem" }}>
                            <div>
                                <p><strong>Product Name: </strong><Link to={`/editProduct/${item.id}`}>{item.name}</Link></p>
                                <p><strong>Product Price: </strong>{item.price}</p>
                                <p><strong>Quantity: </strong>{item.quantity}</p>

                            </div>
                            <div>
                                <img style={{ height: "12rem", width: "16rem" }} src={item.img} alt="" />
                            </div>
                        </div>

                        <div>
                            <h5 style={{ textAlign: 'center' }}>Purchases</h5>
                            <AllCustomers id={ProductId} />
                            <br />
                        </div>
                    </div>
                    )
                })}
            </Container>
        </div>
    )
}
