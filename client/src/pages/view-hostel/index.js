import React, { Fragment, useState } from 'react'
import Head from "next/head";
import styles from './index.module.css'
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import hostels from './data';
import { useRouter } from 'next/router';
import { set } from 'nprogress';

const Page = () => {
    const router = useRouter();
    const defaultwp="https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg"
    
    const [wallpaper,setWallpaper]=useState(defaultwp);
    const [name,setName]=useState("");

    const handleMouseEnter = (image,name) => {
        setWallpaper(image);
        setName(name);
    }
    const handleMouseLeave = () => {
        setWallpaper(defaultwp);
        setName("");
    }

    const handleHostelClick = (path) => {
        router.push('/view-hostel'+path);
    }
    console.log(wallpaper);

  return (
    <>
        <Head>
            <title>View Hostels | Thapar Hostel Allocation System</title>
        </Head>
        <div className={styles.mainCont}>

            <div className={styles.CardCont}>
                <div className={styles.hostels}>
                    {hostels.map((hostel, index) => {
                        return (
                                <div 
                                    key={index} 
                                    className={styles.Card} 
                                    onClick={() => handleHostelClick(hostel.path)}
                                    onMouseEnter={() => handleMouseEnter(hostel.image[0],hostel.name)}
                                    onMouseLeave={() => handleMouseLeave()}
                                    >
                                            <h2>{hostel.name}</h2>
                                            <p>{`${hostel.gender} Hostel`}</p>
                                </div>
                        )
                    })}
                </div>
            </div>


            <div 
                className={styles.wp} 
                style={{
                    backgroundImage:`url(${wallpaper})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat"
                }}
            >
                {name!==""&&
                    <div className={styles.hostelOverlay}>
                        <p>{name}</p>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page
