import React, { Fragment } from 'react'
import Head from "next/head";
import styles from './index.module.css'
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import hostels from './data';
import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();
    
    const handleHostelClick = (path) => {
        router.push('/view-hostel'+path);
    }

  return (
    <>
        <Head>
            <title>View Hostels | Thapar Hostel Allocation System</title>
        </Head>

        <div className={styles.CardCont}>
            {hostels.map((hostel, index) => {
                return (
                        <div 
                            key={index} 
                            className={styles.Card} 
                            style={{
                                background:`url(${hostel.image[0]})`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                            }}
                            onClick={() => handleHostelClick(hostel.path)}
                            >
                            <div className={styles.CardBackground}></div>
                                <h2>{hostel.name}</h2>
                                <p>{`${hostel.gender} Hostel`}</p>
                        </div>
                )
            })}
        </div>


    </>
  )
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page
