import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

function ThankYou() {
    const router=useRouter();
    console.log('router',router.query)
  return (
    
 <>
 <Head>
  <title>Order Received</title>
 </Head>

 <div class="card">
  <Image src="/images/yay.jpg" class="card-img-top" width={300} height={250} alt="order" />

  <div class="card-body text-center">
  <h3 class="card-title text-success">Order Received</h3>
    <p class="card-text">🤩 Thank You for Shopping With us 🤩</p>
    <Link href="/" class="btn btn-primary justify-content bg-success">Go back to shopping !</Link>
  </div>
</div>
 </>

  )
}

export default ThankYou