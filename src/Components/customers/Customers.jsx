import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// bootstrap
import Table from 'react-bootstrap/Table';
// mui
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// style scss
import "./_customers_style.scss";

export default function Customers() {
  const dispatch = useDispatch()
  const storeData = useSelector(state => state);
  const [showProduct, setSowProduct] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const [product, setProduct] = useState([]);
  let today = new Date()

  const buyProduct = (id) => {
    setSowProduct(!showProduct);
    setProduct({ id: "5", customerId: id });
    setShowSave(!showSave)
  }

  const saveProduct = () => {
    const action = { type: "ADDPURCHASES", payload: product }
    dispatch(action)
    setShowSave(!showSave)
    setSowProduct(!showProduct);
  }

  return (
    <Container>
      <div className='customer p-2 py-4 p-md-5 my-3 mx-md-5'>
        <Typography className='px-2' variant="h4" >Customers</Typography>
        <br />
        <Table striped bordered hover size="md">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Product ID</th>
              <th>Purchase Date</th>
              <th>Add Product</th>
            </tr>
          </thead>
          <tbody>
            {storeData.customers.map((customer, index) => {
              return (
                <tr key={index}>
                  <td >{customer.first} {customer.last}</td>
                  <td>
                    <ul>
                      {storeData.purchases.filter(purchases => customer.id === purchases.customerId).map((purchase, index) => {
                        return <Link key={index} to={`/editProduct/${purchase.productId}`}> <li>{purchase.productId} </li></Link>
                      })}
                    </ul>
                  </td>
                  <td>
                    <ul>

                      {storeData.purchases.filter(purchases => customer.id === purchases.customerId).map((purchase, index) => {
                        return <li key={index}>{purchase.date}</li>
                      })}
                    </ul>
                  </td>
                  <td >
                    <Button onClick={() => { buyProduct(customer.id) }} variant="contained">Buy</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
      
      {showProduct && <div className='customer'>
        {showProduct && <Typography style={{ textAlign: 'center' }} variant="h3" >Add Product To Customer: {product.customerId}</Typography>}
        {showProduct && storeData.products.map((item, index) => {
          return (
            <div className='customer' key={index} style={{ margin: "2rem", padding: "2rem", border: "2px solid black", borderRadius: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ textAlign: 'center' }}>Product ID: {item.id}</h3>
                  <p><strong>Product Name: </strong><Link to={`/editProduct/${item.id}`}>{item.name}</Link></p>
                  <p><strong>Product Price: </strong>{item.price}</p>
                  <p><strong>Quantity: </strong>{item.quantity}</p>
                </div>
                <div>
                  <img style={{ height: "12rem", width: "16rem" }} src={item.img} alt="" />
                </div>
              </div>
              <Button onClick={() => { setProduct({ ...product, productId: item.id, date: `${today}` }) }} variant='contained'>Add</Button>
            </div>
          )
        })}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {showSave && <Button onClick={() => { saveProduct() }} variant='contained'>Save</Button>}
        </div>
      </div>}
      <br />
      <br />
    </Container>
  )
}
