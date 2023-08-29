import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Complaint() {
  return (
    <>
    <Head>
     <title>Order Received</title>
    </Head>
   
    <div class="card">
     <Image src="/images/comp.jpg" class="card-img-top" width={300} height={280} alt="order" />
   
     <div class="card-body text-center">
     <h3 class="card-title text-success">Your complaint has been received.</h3>
       <p class="card-text">Your complaint is under process and we will get back to you within 2-3 working days.</p>
       <p class="card-text">🙇‍♂️ Sorry for your inconvenience, have a great day !</p>
       <Link href="/" class="btn btn-primary justify-content bg-success">Back to Home</Link>
     </div>
   </div>
    </>

  )
}

export default Complaint