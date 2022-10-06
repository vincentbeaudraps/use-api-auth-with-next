import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../layouts/Layout";
import Link from "next/link";
import React, {useEffect, useState} from "react";

export default function Home() {
  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState();

  useEffect( () => {
    (
        async () => {
          try {
            const response = await fetch('http://localhost:3000/user', {
              credentials: 'include',
            })
            const content = await response.json();

            setMessage('Vous êtes connecté')
            // @ts-ignore
              setAuth(true);
          }
          catch (e){
             setMessage('Vous êtes déconnecté')
             // @ts-ignore
              setAuth(false);
          }
            }
    )()

  })

    return (
<Layout auth={auth}>
  {message}
</Layout>
  )
}