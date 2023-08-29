import Breadcrumb from '@/components/layout/Breadcrumb'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FcOnlineSupport } from 'react-icons/fc';
import { IoMdContact , IoLogoWhatsapp } from 'react-icons/io';
import { TfiEmail , TfiMobile} from 'react-icons/tfi';



function Support() {
  return (
    <>
    <Head>
        <title>Support</title>
    </Head>
    <Breadcrumb title={'Support'} />
    <div className='d-flex'>
      <FcOnlineSupport size={40} className='pb-1 mx-3' />
    <h3 className='text-danger'>Facing a problem ? <span className='text-muted fs-5'>Write to us.</span></h3>
    </div>
    

    <form>
        <div class="row g-4 mt-2">
          <div class="col-md-5 col-lg-4 order-md-last">
          <Image src="/images/help.jpg" width={350} height={300} alt=" Help Image" class="mx-auto rounded " />
          </div>


          <div class="col-md-7 col-lg-8">
            <div class="row g-3">

              <div class="col-sm-6 col-lg-11">
                <label for="firstName">Full name</label>
                <input type="text" class="form-control" id="fullName" placeholder='Enter your Full Name' required />
              </div>

              <div class="col-11">
                <label for="mobile">Mobile</label>
                <div class="input-group">
                  <input
                    type="text" class="form-control" id="mobile" placeholder="+91" required />
                </div>
              </div>

              <div class="col-11">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" required />
              </div>   

              <div class="form-group">
               <label for="exampleFormControlFile1" >Upload Screenshot: </label>
               <input type="file" class="form-control-file" id="exampleFormControlFile1" className="ms-3" />
               </div>

              <div class="col-11 mb-3">
                <label for="problem" class="form-label">Describe your problem</label>
                <textarea class="form-control" id="problem" rows="3" required></textarea>
               </div>  

             
              <div class="input-group">
                <button type="submit" className="col-11 btn btn-info btn-lg">
                 <Link href="/complaint" className='text-decoration-none text-light'> Send my Issue</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <hr class="my-4" />

      <div className='d-flex '>
        <IoMdContact size={40} className='pb-1 mx-3' />
         <h3 className='text-success'>Reach out to us</h3>
      </div>
      

      <div class="row g-4 mt-2">

      <div class="card col-md-5 col-lg-4 order-md-last">
         <Image src="/images/supp.png" width={200} height={180} alt="Support-Image" class="mx-auto rounded "/>
         <div class="card-body">
          <p class="card-text text-center fw-bold">Write to us via E-mail and we will reach out to you in 2-3 working 
          days or for Immediate assistance call us on our toll-free number. Thank You.</p>
         </div>
        </div>


          <div class="col-md-7 col-lg-8">
            <div class="row g-3">

              <div class="col-sm-6 col-lg-11 d-flex">
                <TfiEmail size={30} className='pb-1 mx-3' />
                <p className='fs-5 text-muted'>E-mail: aniketkajal2000@gmail.com</p>
              </div>

              <div class="col-sm-6 col-lg-11 d-flex">
                <TfiMobile size={30} className='pb-1 mx-3' />
                <p className='fs-5 text-muted'>Mobile: 1800-123-1234 (Toll-free)</p>
              </div>

              <div class="col-sm-6 col-lg-11 d-flex">
                <IoLogoWhatsapp size={30} className='pb-1 mx-3' />
                <p className='fs-5 text-muted'>Whatsapp: +91 99999 99999</p>
              </div>

              <div class="col-sm-6 col-lg-11 d-flex">
                <p className='fs-6 text-danger'>*Note: <span className='text-secondary fs-6'>You might be needed to verify
                 your account via an OTP to proceed with the Customer Support personnel and in case of issues like product 
                 return of product exchange you need to be present with the original receipt and transaction ID in order to 
                 complete your request and yourr problem will be solved in 2-3 business days. </span></p>
              </div>

            </div>
          </div>
        </div>



    </>
  )
}

export default Support