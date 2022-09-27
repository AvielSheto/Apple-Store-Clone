import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// mui
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function TotalPurchases() {
    const [total, setTotal] = useState(0)
    const storeData = useSelector((state) => state)

    useEffect(()=>{
        setTotal(storeData.purchases.length)        
    }, [storeData.purchases.length]);

  return (
    <div>
    <h4 className='p-1 m-1 para-6 border border-secondary rounded'><ShoppingBagIcon color="primary" fontSize="large"/> {total}</h4>
    </div>
  )
}
