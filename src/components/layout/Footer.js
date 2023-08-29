import Link from 'next/link'
import React from 'react'
import { FaLinkedin , FaInstagram , FaFacebook , FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <>

<footer class="bg-black text-white text-center mt-5">
   
    <div class="container p-4">
     
      <div class="row">
       
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase text-light">Trends Shop</h5>

          <p>
            Your one stop destination for *Everything* you need where you will get the best quality products at the best rates in the market.
            Weekly discounts upto 40% and flat 30% off on all products for new users.
          </p>
        </div>
       

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Quick Links</h5>

          <ul class="list-unstyled mt-2">
            <li>
            <Link href="/" class="text-white text-decoration-none">Store</Link>
            </li>
            <li>
            <Link href="/cart" class="text-white text-decoration-none">Cart</Link>
            </li>
            <li>
            <Link href="/about" target="_blank" class="text-white text-decoration-none">About</Link>
            </li>
            <li>
            <Link href="/support" target="_blank" class="text-white text-decoration-none">Support</Link>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Follow us on</h5>

          <ul class="list-unstyled mt-2">
            <li>
           
            <Link href="https://www.linkedin.com/in/aniket-kajal-22930b17a/" target="_blank" class="text-white text-decoration-none">
            <FaLinkedin size={15} className='me-2'/> LinkedIn</Link>
            </li>
            <li>
            
            <Link href="https://www.instagram.com/aniket_kajal/" target="_blank" class="text-white text-decoration-none">
            <FaInstagram size={15} className='me-2'/> Instagram</Link>
            </li>
            <li>
            
            <Link href="https://www.facebook.com/aniket.kajal.56" target="_blank" class="text-white text-decoration-none">
            <FaFacebook size={15} className='me-2'/> Facebook</Link>
            </li>
            <li>
            
            <Link href="https://twitter.com/aniketkajal2000" target="_blank" class="text-white text-decoration-none">
              <FaTwitter size={15} className='me-2'/>Twitter</Link>
            </li>
          </ul>
        </div>

      </div>
  
    </div>
 

  
    <div class="text-center p-2 bg-secondary" >
      © 2023 Copyright @ Aniket_Kajal
    </div>
   
  </footer>

    </>
  )
}

export default Footer