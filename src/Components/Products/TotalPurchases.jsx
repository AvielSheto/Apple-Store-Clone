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
    <div style={{float:"right", borderRadius:"30%",backgroundColor:"black",  textAlign:"center", color:"white" }}>
    <h4 className='p-3 para-6'><ShoppingBagIcon color="primary" fontSize="large"/> {total}</h4>
    </div>
  )
}
