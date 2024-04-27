import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import hostels from './data';
import Head from "next/head";
import styles from './index.module.css'
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const hostel = () => {

    const router = useRouter();
    const { id } = router.query;
    const [data,setData]=useState({});

    useEffect(()=>{
        const abc=hostels.filter((hostel, index) => {
            if(('/'+id)==hostel.path ){
                return (hostel);
            }
        })
        console.log(abc[0]);
        setData(abc[0]);
    })


  return (
    <>
        <Head>
            <title>{data.name} | Thapar Hostel Allocation System</title>
        </Head>
        
    </>
  )
}

hostel.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;


export default hostel
