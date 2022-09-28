import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// mui
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Fab from '@mui/material/Fab';

export default function TotalPurchases() {
    const [total, setTotal] = useState(0)
    const storeData = useSelector((state) => state)

    useEffect(()=>{
        setTotal(storeData.purchases.length)        
    }, [storeData.purchases.length]);

  return (
    <div className='mx-4'>
      <Fab size="medium" color="primary" aria-label="Bag"><ShoppingBagIcon />{total}</Fab>
    </div>
  )
}
