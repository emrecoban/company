'use client'
import React, { useEffect, useState } from 'react'
import style from './dashboard.module.css'



const Dashboard = () => {
    /*     const [data, setData] = useState([])
        const [err, setErr] = useState(false)
        const [isLoading, setIsLoading] = useState(false)
    
        useEffect(() => {
            const getData = async () => {
                setIsLoading(false)
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
                if (!res.ok) {
                    setErr(true)
                }
    
                const data = await res.json()
                setData(data)
                setIsLoading(false)
            }
            getData()
        }, []) */

    return (
        <div className={style.container}>Dashboard</div>
    )
}

export default Dashboard