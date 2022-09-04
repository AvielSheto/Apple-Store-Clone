import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
// bootstrap
import Table from 'react-bootstrap/Table';
// mui
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


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

      <div style={{margin: "2rem", padding: "2rem", border: "2px solid black", borderRadius: "15px" }}>
        <h1 style={{ textAlign: 'center' }}>customers</h1>
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


      {showProduct && <h1 style={{ textAlign: 'center' }}>Add Product To Customer ID:{product.customerId}</h1>}
      {showProduct && storeData.products.map((item, index) => {
        return (
          <div key={index} style={{ margin: "2rem", padding: "2rem", border: "2px solid black", borderRadius: "15px" }}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <h3 style={{ textAlign: 'center' }}>Product ID: {item.id}</h3>
                <p><strong>Product Name: </strong><Link to={`/editProduct/${item.id}`}>{item.name}</Link></p>
                <p><strong>Product Price: </strong>{item.price}</p>
                <p><strong>Quantity: </strong>{item.quantity}</p>
              </div>
              <div>
                <img style={{ height: "10rem", width: "15rem" }} src={item.img} alt="" />
              </div>
            </div>
            <Button onClick={()=>{setProduct({ ...product, productId: item.id, date: `${today}`}) }} variant='contained'>Add</Button>
          </div>
        )
      })}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {showSave && <Button onClick={() => { saveProduct() }} variant='contained'>Save</Button>}
      </div>

    </Container>
  )
}
