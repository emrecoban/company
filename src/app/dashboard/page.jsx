'use client'
import React, { useEffect, useState } from 'react'
import style from './dashboard.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


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

    const session = useSession()
    const router = useRouter()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

    console.log("çerez ", session)

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    if (session.status === "authenticated") {
        return (
            <div className={style.container}>Dashboard</div>
        )
    }
}

export default Dashboard