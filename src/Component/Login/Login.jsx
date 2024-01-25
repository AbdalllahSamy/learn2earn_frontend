import React, { useEffect } from 'react'
import Style from './Login.module.css'
import img1 from '../../imgs/women with tab 1.png'
import google from '../../imgs/google 1.jpg'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
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
  return (
    <>
    <div>
        {/* Other components... */}
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
              <form className=''>
                {/* <i className={`fa-regular fa-user ${Style.frameUsername} position-absolute` }></i> */}
                <input type="text" placeholder='Username' className={`form-control ${Style.loginForm}`} />
                <input type="password" placeholder='Password' className={`form-control ${Style.loginForm} my-4`} />
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
              <p className={`text-center mt-3 ${Style.donotHaveAcc}`}> Don’t have an account? <span className={`${Style.Signin}`}>
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
