import Head from 'next/head'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react'
import { AiOutlineMail , AiFillLock} from 'react-icons/ai'; 
import { BsFillPersonCheckFill } from 'react-icons/bs'; 
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';

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
    getValues,
    formState: { errors },
}=useForm();

const submitHandler = async ({ name, email , password }) => {
    try{
        await axios.post('/api/auth/signup',{
            name,
            email,
            password,
        });

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
            <title>Create Account</title>
        </Head>

        <form onSubmit={handleSubmit(submitHandler)}>
         
        <h1 className='mb-4 text-xl'>Create Account</h1>

          <div class="col-md-7 col-lg-8">
            <div class="row g-3">

            <div class="col-11 mb-3 ">
              <label for="name" className='fs-4'><BsFillPersonCheckFill size={23} className='me-2'/>Name</label>
              <input type="text"
               {...register('name',{required: 'Please enter your name',
                 })} 
            class="form-control" id="name" placeholder="Enter your name"  autoFocus/>
              {errors.name && (<div className="text-danger">{errors.name.message}</div>)}
              </div>   

            <div class="col-11 mb-3 ">
              <label for="email" className='fs-4'><AiOutlineMail size={23} /> Email</label>
              <input type="email"
               {...register('email',{required: 'Please enter e-mail',
                pattern:{value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: 'Please enter valid e-mail',
            }})} 
            class="form-control" id="email" placeholder="you@example.com"/>
              {errors.email && (<div className="text-danger">{errors.email.message}</div>)}
              </div>   


              <div class="col-11 mb-3 ">
              <label for="password" className='fs-4'><AiFillLock size={23} />  Password</label>
              <input type="password"
               {...register('password',{required: 'Please enter password',
               minLength: {value:6, message:'Password is more than 5 characters'},})}
              
              className="form-control" id="password" placeholder="Ex:- Abcdef@12345#"  /> 
              {errors.password && (<div className="text-danger">{errors.password.message}</div>)}
            </div>


            <div class="col-11 mb-3 ">
              <label for="confirmPassword" className='fs-4'><AiFillLock size={23} className='me-2'/>Confirm Password</label>
              <input type="password"
               {...register('confirmPassword',{required: 'Please confirm your password',
               validate: (value) => value === getValues('password'),
               minLength: {value:6, message:' Password do not match ',},})}
              className="form-control" id="confirmPassword" placeholder="Re-type your password"  /> 
              {errors.confirmPassword && (<div className="text-danger">{errors.confirmPassword.message}</div>)}
              {errors.confirmPassword && errors.confirmPassword.type === 'validate' &&  ( <div className='text-danger'>Password do not match</div>)}
            </div>



            <div className='mb-3'>
                <button className='btn btn-primary'>Register</button>
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