import { getCartItems } from '@/utils/cartItems';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from 'react-icons/fa';

function Header() {

const { status, data : session } = useSession(); 

  const [cart, setCart] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const cartItems = getCartItems();
      setCart(cartItems.length);
    }, 1000);
  }, []);

  return (
    <>

<ToastContainer position='bottom-center' limit={1} />

      <nav className="navbar navbar-bg text-white">
        <div className="container-md">
        <Link className="fs-2 fw-bold fst-italic text-light text-decoration-none" href="/">
              Trends Shop
            </Link>
          <Link
            href="/cart"
            className="nav-item nav-link d-flex gap-1 align-items-center text-white"
          >
            <span className="p-1 rounded-circle  bg-success">
              <BsCart4 size={21} className="pb-1" />
            </span>
            {cart} items
          </Link>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg shadow-sm mb-2 rounded container px-2">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <Link href="/" className="nav-item nav-link active">
              Store
            </Link>
            <Link href="/about" className="nav-item nav-link active">
              About Us
            </Link>
            <Link href="/support" className="nav-item nav-link active">
              Support
            </Link>
          </div>
        </div>

        
          { status === 'loading' ? ('Loading'): 
            session?.user ? (
              session.user.name
              ):
          (
            <Link href="/login" className="nav-item nav-link d-flex gap-1 align-items-center text-dark fs-5 me-5">
            <span className="p-1 rounded-circle ">
              <FaUserCircle size={21} className="pb-1" />
            </span>
            <span className='text-danger'>Login</span>
          </Link>
          )}
            

      </nav>
    </>
  );
}

export default Header;
