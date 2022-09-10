import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/_loading.scss'

export default function Loading() {
    const navigate = useNavigate()
    const loadingTimeOut = ()=>{
        setTimeout(() => {
            navigate('/')
        }, "1500");
    }
    loadingTimeOut()
    return (
        <div className='load'>
            <div class="loading"></div>
        </div>
    )
}
