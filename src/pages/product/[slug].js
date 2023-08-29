import Breadcrumb from '@/components/layout/Breadcrumb';
import { addToCart } from '@/utils/cartItems';
import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BiRupee } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai'

function SingleProduct({ product }) {

  const [quantity, setQuantity] = useState(1);


  var randomNumber = Math.floor(Math.random() * 4000) + 1;

  return (
    <>
      <Head>
        <title>Product Name</title>
      </Head>
      <main>
        <Breadcrumb title={'Product'} />
        <div className='row g-3'>
          <div className='col-lg-6'>
            <div className='p-2'>
            <Image src={product?.thumbnail} className='border' alt={product?.title} width={350} height={300} />
            </div>

            <div className='d-flex gap-3 mt-2 ms-5'>
            <h5> Ratings:</h5>
            <h5 className='text-success'><AiFillStar size={18} />{product?.rating}</h5>
            <h6 className='text-secondary'>( {randomNumber} Reviews )</h6>
          </div>


          </div>
          <div className='col-lg-6'>
            <h2>{product?.title}</h2>
            <h4 className='card-title d-flex align-items-center'><BiRupee size={21} />{product?.price}</h4>
            <h5 className='mt-2'>Description</h5>
            <p>{product?.description}</p>
            <div className='d-flex gap-3'>
              <b>Qty:</b>
              <div class="input-group input-group-sm w-25 mb-3">
                <button class="input-group-text btn btn-sm btn-outline-dark" onClick={()=> setQuantity((quantity>1)?quantity-1:1)}>-</button>
                 <input type="tel" class="form-control" value={quantity}  />
                <button class="input-group-text btn btn-sm btn-outline-dark" onClick={()=> setQuantity(quantity+1)}>+</button>
              </div>
            </div>
            <div className='d-flex gap-3 mt-4'>
              <button type='button' className='btn btn-sm btn-warning' onClick={(e)=>{addToCart(product, quantity), toast.success('Added to cart')}} >Add to cart</button>
              <button type='button' className='btn btn-sm btn-success'>Buy Now</button>
            </div>

            <h4 className='mt-5'>Additional details:</h4>

         

          <div className='d-flex gap-3 mt-2'>
            <h5> Brand:</h5>
            <h5 className='text-secondary'>{product?.brand}</h5>
          </div>

          <div className='d-flex gap-3 mt-2'>
            <h5>Stock:</h5>
            <h5 className='text-secondary'>{product?.stock} <span className='text-success'>(In stock)</span></h5>
          </div>

          <div className='d-flex gap-3 mt-2'>
            <h5>Discount percentage:</h5>
            <h5 className='text-secondary'>{product?.discountPercentage}</h5>
          </div>


          </div>
        </div>
      </main>
    </>
  )   
}

export default SingleProduct

export async function getServerSideProps(context){

  const productId=context.params.slug;
  let product=[];
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    product = await response.json();
  } catch (error) {
    console.error(error)
    return {notFound:true}
  }
  
  return{
    props:{
        product
    }
  }
    
  }