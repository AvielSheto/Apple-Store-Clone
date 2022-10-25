import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// bootstrap
import Table from 'react-bootstrap/Table';
// mui
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
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
    <div className='px-md-5'>
      <div className='customer px-1 p-sm-4 pt-3 my-3 mx-md-5'>
        <p className='display-4 ps-3'>Customers</p>
        <br />
        <Table striped bordered hover size="sm">
          <thead >
            <tr>
              <th className='display-6 fs-5 fw-semibold'>Customer Name</th>
              <th className='display-6 fs-5 fw-semibold'>Product ID</th>
              <th className='display-6 fs-5 fw-semibold'>Purchase Date</th>
              <th className='display-6 fs-5 fw-semibold'>Add Product</th>
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

      {showProduct && <div className='customer  py-4 p-md-5 my-3 mx-md-5'>
        {showProduct && <p className='display-4 px-5'>Add Product To Customer: {product.customerId}</p>}


        {showProduct && storeData.products.map((item, index) => {
          return (
            <div className='customer ' key={index}>
              <div className='product p-4 p-md-5 my-3'>
                <div className='d-flex justify-content-between'>
                  <p className='display-6 fs-4'> <strong className='display-6 fw-normal fs-2'>Product ID: </strong>{item.id}</p>
                  <Link to={`/editProduct/${item.id}`}><Fab size="small" color="primary" aria-label="edit"><EditIcon /></Fab></Link>
                </div>
                <hr style={{ width: "100%", textAlign: "center" }} />
                <div className='product p-2 p-md-4 d-sm-flex justify-content-between'>
                  <div className='p-2'>
                    <p className='display-6 fs-5'><strong className='fs-3'>Product Name: </strong>{item.name}</p>
                    <p className='display-6 fs-5'><strong className='fs-3'>Product Price: </strong>{item.price}</p>
                    <p className='display-6 fs-5'><strong className='fs-3'>Quantity: </strong>{item.quantity}</p>
                  </div>
                  <div className='d-flex align-content-center justify-content-center'>
                    <img style={{ height: "12rem", width: "16rem" }} src={item.img} alt="product" />
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
              <Button onClick={() => { setProduct({ ...product, productId: item.id, date: `${today}` }) }} variant='contained'>Add</Button>
              </div>
            </div>
          )
        })}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {showSave && <Button onClick={() => { saveProduct() }} variant='contained'>Save</Button>}
        </div>
      </div>}
      <br />
      <br />
    </div>
  )
}
