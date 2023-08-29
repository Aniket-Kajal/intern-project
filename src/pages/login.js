import Head from 'next/head'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react'
import { AiOutlineMail , AiFillLock} from 'react-icons/ai'; 
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

function LoginScreen() {

const {data: session} = useSession();

const router = useRouter();
const { redirect } = router.query;

useEffect(() => {
  if(session?.user){
    router.push(redirect || '/');
  }
},[router, session, redirect]);

const {
    handleSubmit,
    register,
    formState: { errors },
}=useForm();

const submitHandler = async ({ email , password }) => {
    try{
      const result = await signIn('credentials',{
        redirect : false,
        email,
        password,
      });
      if(result.error){
        toast.error(result.error);
      }
    }catch(err){
     toast.error(getError(err));
    }
};

  return (
    <>
        <Head>
            <title>Login</title>
        </Head>

        <form onSubmit={handleSubmit(submitHandler)}>
         
        <h1 className='mb-4 text-xl'>Login</h1>

          <div class="col-md-7 col-lg-8">
            <div class="row g-3">

            <div class="col-11 mb-3 ">
              <label for="email" className='fs-4'><AiOutlineMail size={23} /> Email</label>
              <input type="email"
               {...register('email',{required: 'Please enter e-mail',
                pattern:{value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: 'Please enter valid e-mail',
            }})} 
            class="form-control" id="email" placeholder="you@example.com"  autoFocus/>
              {errors.email && (<div className="text-danger">{errors.email.message}</div>)}
              </div>   


              <div class="col-11 mb-3 ">
              <label for="password" className='fs-4'><AiFillLock size={23} />  Password</label>
              <input type="password"
               {...register('password',{required: 'Please enter password',
               minLength: {value:6, message:'Password is more than 5 characters'},})}
              
              className="form-control" id="password" placeholder="Ex:- Abcdef@12345#" autoFocus /> 
              {errors.password && (<div className="text-danger">{errors.password.message}</div>)}
            </div>

            <div className='mb-3'>
                <button className='btn btn-primary'>Login</button>
            </div>
            <div className='mb-4'>
                Don&apos;t have an account? &nbsp;
                <Link href={`/register?redirect=${redirect || '/'}`}>Register</Link>
            </div>

            </div>
          </div>
      </form>
       
    </>
  )
}

export default LoginScreen