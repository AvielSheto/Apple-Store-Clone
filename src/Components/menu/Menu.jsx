import React from 'react';
import { Link } from 'react-router-dom';
// mui
import Container from '@mui/material/Container';
import './menu_style.scss';

export default function Menu() {
  return (
    <Container  >
      <Link style={{ textDecoration: 'none' }} to={'products'}>
        <div className='products p-3 pt-5 p-md-5 m-4' >
          <p className='display-3 fw-normal'>Products</p>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none'}} to={'customers'} >
        <div className='customers p-3 pt-5 p-md-5 m-4 d-flex'>
          <p className='display-3 text-white fw-normal' style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Customers</p>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to={'purchased'}>
        <div className='purchases p-3 pt-5 p-md-5 m-4'>
          <p className='display-3 text-white fw-normal' style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Purchases</p>
        </div>
      </Link>
    </Container>
  )
}
