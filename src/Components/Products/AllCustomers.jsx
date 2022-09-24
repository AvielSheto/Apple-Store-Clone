import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './_products.scss';
// mui
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function AllCustomers(props) {
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();
  const [showProducts, setShowProducts] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const [showAddBtn, setShowAddBtn] = useState(true);
  const [product, setProduct] = useState([]);

  const addProducts = () => {
    setShowProducts(!showProducts);
    setShowAddBtn(!showAddBtn);
    setShowSaveBtn(!showSaveBtn);
  }

  const SaveProducts = () => {
    setShowProducts(!showProducts);
    setShowSaveBtn(!showSaveBtn);
    setShowAddBtn(!showAddBtn);
    addToPurchases();
  }

  const addToPurchases = () => {
    const action = { type: "ADDPURCHASES", payload: product }
    dispatch(action);
  }

  return (
    <div>
      {storeData.purchases.filter(purchases => purchases.productId === props.id).map((item, index) => {
        let customerId = item.customerId
        let itemDate = item.date
        return <div key={index} className='customerPurchases'>
          <div className='d-flex justify-content-between py-1 1 m-2 mx-md-5'>
            <div>
              <p className='display-6 fs-1'>Customer ID: {item.customerId}</p>
              <p className='display-6 fs-5'><strong>Purchased Date: </strong>{item.date}</p>
            </div>
            <div>
              <Link to={`/editCustomer/${item.customerId}`}><Fab size='small' color="primary" aria-label="edit"><EditIcon /></Fab></Link>
            </div>
          </div>
          {showProducts && <div> {storeData.products.map((item, index) => {
            return (
              <div key={index} className='product p-4 p-md-5 my-3 mx-3'>
                <div className='d-md-flex justify-content-between'>
                  <div>
                    <strong>Product Name: </strong><Link to={`/editProduct/${item.id}`}>{item.name}</Link>
                    <p><strong>Product Price: </strong>{item.price}</p>
                    <p><strong>Quantity: </strong>{item.quantity}</p>
                  </div>
                  <div>
                    <img style={{ height: "12rem", width: "16rem" }} src={item.img} alt="" />
                  </div>
                </div>
                <div>
                  <Button onClick={() => { setProduct({ ...product, id: "4", customerId: customerId, productId: item.id, date: itemDate }) }} variant="contained"><AddShoppingCartIcon /></Button>
                </div>
              </div>)
          })}
          </div>}
          <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
            {showAddBtn && <Button onClick={addProducts} variant="outlined" color="info">Add Product<ShoppingCartIcon /></Button>}
            {showSaveBtn && <Button onClick={SaveProducts} variant="contained">Save</Button>}
          </div>
        </div>
      })}
    </div>
  )
}
