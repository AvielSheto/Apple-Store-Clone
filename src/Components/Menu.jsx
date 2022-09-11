import React from 'react'
import { Link } from 'react-router-dom'
// mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../style/menu_style.css'

export default function Menu() {
  return (
    <Container  >
      <Link style={{ textDecoration:'none'}} to={'products'}>
        <div className='products'>
          <Typography style={{width:"40%"}} variant="h3" >Products</Typography>
          {/* <img src="https://www.itworld.com.my/image/catalog/10newhome/apsp_banner.jpg" alt="products" /> */}
        </div>
      </Link>

      <Link style={{ textDecoration: 'none' }} to={'customers'} >
        <div className='customers'>
          <Typography variant="h3" color='white' style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }} outline>Customers</Typography>
        </div>
      </Link>

      <Link style={{ textDecoration: 'none' }} to={'purchased'}>
        <div className='purchases'>
          <Typography variant="h3" color='white' style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Purchases</Typography>
        </div>
      </Link>
    </Container>
  )
}
