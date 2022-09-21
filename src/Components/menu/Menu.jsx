import React from 'react';
import { Link } from 'react-router-dom';
// mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './menu_style.scss';

export default function Menu() {
  return (
    <Container  >
      <Link style={{ textDecoration: 'none' }} to={'products'}>
        <div className='products p-3 pt-5 p-md-5 m-4' >
          <Typography variant="h3" style={{ textShadow: "1px 1px #fff, -1px 1px #fff, 1px -1px #fff, -1px -1px #fff" }}>Products</Typography>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to={'customers'} >
        <div className='customers p-3 pt-5 p-md-5 m-4'>
          <Typography variant="h3" color='white' style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }} outline>Customers</Typography>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to={'purchased'}>
        <div className='purchases p-3 pt-5 p-md-5 m-4'>
          <Typography variant="h3" color='white' style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Purchases</Typography>
        </div>
      </Link>
    </Container>
  )
}
