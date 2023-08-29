import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <>
     <Head>
        <title>About Us</title>
      </Head>
        
      <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <Image src="/images/cart.png" class="img-fluid rounded-start" width={350} height={300} alt="Cart Image" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-success">Why Trends Shop ?</h5>
        <p class="card-text fst-italic">Trends Shop is one happy destination for all the customers around the globe. Here you can find some of the 
        best quality products at all time also available in wholesale and retail price.{"\n"} </p>
        <p class="card-text fst-italic">We are partnered up with multiple  International brands such as Apple, Samsung and more to deliver the best service and products
           possible to every customer and make sure our customer always get the satisfactory results they deserve</p>
        <p class="card-text"><small class="text-muted">Estb: 2023 @ Trends Shop</small></p>
      </div>
    </div>
  </div>
</div>



  <div className='text-center mt-5 mb-4 font-monospace text-success'>
<h2>Exclusive Features </h2>
  </div>

<div class="card-group">
  
<div class="card">
    <Image src="/images/brands.png" class="card-img-top" width={220} height={200} alt="Brands" />
    <div class="card-body">
      <h5 class="card-title text-center text-secondary">Top International Brands</h5>
      <p class="card-text text-center">Brands like Apple, Samsung and more are partnered up with us to provide you with the Best service and products 
      as per your needs. Also, quality products of different sectors like fashion, electronics, furniture are also available.</p>   
    </div>
  </div>
 
  <div class="card">
    <Image src="/images/prod.jpeg" class="card-img-top" width={220} height={200} alt="Range" />
    <div class="card-body">
      <h5 class="card-title text-center text-secondary">Wide range of products</h5>
      <p class="card-text text-center">Products of different types like fashion, furniture, electronics, home-interior, skincare, groceries and more are available
      at all times and at a competitive price as per the market. </p>
    </div>
  </div>

  <div class="card">
    <Image src="/images/helpline.jpg" class="card-img-top" width={220} height={200} alt="Support Image" />
    <div class="card-body">
      <h5 class="card-title text-center text-secondary">24x7 Customer Support</h5>
      <p class="card-text text-center ">The customer helpline is active 24x7 throughout the year and customers can reach out to us for any issue at any given time
      and we will make sure to resolve your issue within 2-3 working days. You can either call us or drop an e-mail.</p>   
    </div>
  </div>
  
</div>


  <div className='text-center mt-5 mb-4 font-monospace text-success'>
    <h2>Top Brands Available </h2>
  </div>



<div className='d-flex gap-1 text-center'>
<div class="p-3 mb-2 bg-secondary text-white col-sm-4">Apple</div>

<div class="p-3 mb-2 bg-secondary text-white col-sm-4">SAMSUNG</div>
<div class="p-3 mb-2 bg-secondary text-white col-sm-4">One-Plus</div>
</div>

<div className='d-flex gap-1 text-center'>
<div class="p-3 mb-2 bg-secondary text-white col-sm-4">ZARA</div>

<div class="p-3 mb-2 bg-secondary text-white col-sm-4">LEVI</div>
<div class="p-3 mb-2 bg-secondary text-white col-sm-4">Adidas</div>
</div>

<div className='d-flex gap-1 text-center'>
<div class="p-3 mb-2 bg-secondary text-white col-sm-4">Hermes-Paris</div>

<div class="p-3 mb-2 bg-secondary text-white col-sm-4">CARTIER-Paris</div>
<div class="p-3 mb-2 bg-secondary text-white col-sm-4">Louis Vuitton</div>
</div>

<div className='d-flex gap-1 text-center'>
<div class="p-3 mb-2 bg-secondary text-white col-sm-4">QUALCOMM</div>

<div class="p-3 mb-2 bg-secondary text-white col-sm-4">Lightning Interior</div>
<div class="p-3 mb-2 bg-secondary text-white col-sm-4">HP laptops</div>
</div>







    </>
  )
}

export default About