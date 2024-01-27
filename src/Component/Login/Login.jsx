import React, { useEffect, useRef, useState, useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import Style from './Login.module.css'
import { useNavigate } from "react-router-dom"
import img1 from '../../imgs/women with tab 1.png'
import google from '../../imgs/google 1.jpg'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import axios from '../../api/axios';
const LOGIN_URL = '/auth/login';

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [success, setSuccess] = useState('false');
  const [type, setType] = useState('');
  const navigateFunction = useNavigate();

  useEffect(() => {
    let message = localStorage.getItem('account');
    if (message) {
      toast.success(message, {
        position: 'top-right',
        duration: 6000,
        style: {
          backgroundColor: '#00FF0A',
          color: 'white',
        },
        iconTheme: {
          primary: 'white',
          secondary: '#00FF0A',
        },
      });
      localStorage.removeItem('account');
    }
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd, type: type }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      const accessToken = response.data.data.token;
      setAuth({ user, pwd, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
      const $userType = response.data.data.user.type_user;
      if($userType === 'admin' || $userType === 'superadmin'){
        console.log('admin');
      }else if($userType === 'teacher'){
        navigateFunction("/teacher/dashboard");
      }else if($userType === 'parent'){
        console.log('parent');
      }else{
        console.log('student');
      }
      if (success) {
        setSuccess(false);
        toast.success("Welcome " + response.data.data.user.name, {
          position: 'top-right',
          duration: 6000,
          style: {
            backgroundColor: '#00FF0A',
            color: 'white',
          },
          iconTheme: {
            primary: 'white',
            secondary: '#00FF0A',
          },
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-right',
        duration: 5000,
        style: {
          backgroundColor: 'red',
          color: 'white',
        },
        iconTheme: {
          primary: 'white',
          secondary: 'red',
        },
      });
    }
  }



  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"></link>
      <div className={`${Style['main-div']}`}>
        <div className={`col-md-6 ${Style.backG}`}>
          <div className={`${Style.underImg} col-8 d-flex`}>
            <div className={`${Style.womanDiv}`}>
              <img src={img1} alt="woman" className={`${Style.womanImg} d-block`} />
            </div>
            <div className={`${Style.textDiv}`}>
              <p className={`${Style.pWoman}`}>Learn <br />TO <br />Earn</p>
            </div>
          </div>
        </div>
        <div className={`${Style.loginFormSide}`}>
          <div className={`${Style.smallCard} w-100`}>
            <div className='text-center'>
              <h3 className={`${Style.h3Login} `}>login</h3>
              <span className={`${Style.line} `}></span>
              <p className={`${Style.pLogin}`}>Welcome back to Learn2Earn education platform</p>
            </div>
            <div >
              <form onSubmit={handleSubmit}>
                {/* <i className={`fa-regular fa-user ${Style.frameUsername} position-absolute` }></i> */}
                <input type="text" placeholder='Username' className={`form-control ${Style.loginForm}`}
                  ref={userRef}
                  autoComplete='off'
                  onChange={(e) => {
                    setUser(e.target.value);
                    if (user.includes('@')) {
                      setType('email');
                    } else {
                      setType('phone');
                    }
                  }}
                  value={user}
                  required
                />
                <input type="password" placeholder='Password' className={`form-control ${Style.loginForm} my-4`}
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
                <button type='submit' className={`${Style.submitForm}`}>Login Now</button>
              </form>
              <Link className={`navbar-brand`} to="#">
                <p className={`${Style.forgetPassword}`}>Forget My Password!</p>
              </Link>
              <Link type="button" className={`${Style.loginWithGoogle} d-flex`} to='#'>
                <div className={`text-center d-flex align-items-center`}>
                  <div className='googleDiv'>
                    <img src={google} className={`${Style.googleImg}`} alt="google" />
                  </div>
                  <span className={`${Style.regularSpan}`}> Login with <span className={`${Style.googleSpan}`}>google</span></span>
                </div>
              </Link>
              <p className={`text-center mt-3 ${Style.donotHaveAcc}`}> Don't have an account? <span className={`${Style.Signin}`}>
                <Link className='text-decoration-none'>
                  Sign In
                </Link>
              </span></p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
