import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// mui
import Typography from '@mui/material/Typography';


export default function TotalPurchases() {
    const [total, setTotal] = useState(0)
    const storeData = useSelector((state) => state)

    useEffect(()=>{
        setTotal(storeData.purchases.length)        
    }, [storeData.purchases.length]);

  return (
    <div className='regionOne' style={{float:"right" ,width:"19rem" , padding:"0.5rem", borderRadius:"30px",backgroundColor:"black", opacity:"0.6", textAlign:"center", color:"blanchedalmond" }}>
    <h2>Total Purchased : {total}</h2>
    
    </div>
  )
}
