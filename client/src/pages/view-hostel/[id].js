import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import hostels from './data';
import Head from "next/head";
import styles from './index.module.css'
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { SvgIcon } from '@mui/material';

const hostel = () => {

    const router = useRouter();
    const { id } = router.query;
    const [images,setImages]=useState([]);
    const [data,setData]=useState({});

    useEffect(()=>{
        const abc=hostels.filter((hostel, index) => {
            if(('/'+id)==hostel.path ){
                return (hostel);
            }
        })
        setImages(abc[0].image);
        setData(abc[0]);
    })


  return (
    <>
        <Head>
            <title>{data.name} | Thapar Hostel Allocation System</title>
        </Head>
        
        <div className={styles.heading}>
                <h1>{data.name}</h1>
                <h4>{data.gender}  Hostel</h4>
        </div>
        <div className={styles.Grid}>
            
            <div className={styles.LGridItem}>
                <img src={images[0]} alt={data.name} className={styles.LImage}/>
            </div>

            <div className={styles.SGridCont}>
            
                {images.slice(1, 4).map((image, index) => (
                    <div key={index} className={styles.SGridItem}>
                        <img src={image} alt={data.name} className={styles.SImage}/>
                    </div>
                ))}

                <div className={styles.SGridItem}>
                    <div className={styles.overlay}>
                        <SvgIcon fontSize="small">
                          <AddPhotoAlternateIcon />
                        </SvgIcon>
                        {`+${images.length-5} images`}                            
                    </div>
                    <img src={images[4]} alt={data.name} className={styles.SImage}/>
                </div>                    

            </div>

        </div>

        <div className={styles.content}>
            <p>{data.description}</p>
            <div className={styles.lowerCont}>

                <div className={styles.HostelInfo}>
                    <p><b>Floors</b> : {data.floors}</p>
                    <p><b>Rooms</b> : {data.rooms}</p>
                    <p><b>Student Capacity</b> : {data.students}</p>
                </div>
                <div className={styles.Contact}>
                    <div><b>Caretaker : </b>{data.caretaker}</div>
                    <div><b>Warden : </b>{data.warden}</div>
                    <p>{data.email}</p>
                    <p>{data.contact}</p>
                </div>
             
            </div>
        </div>

    </>
  )
}

hostel.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;


export default hostel
