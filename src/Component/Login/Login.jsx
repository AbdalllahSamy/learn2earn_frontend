import React from 'react'
import Style from './Login.module.css'
import img1 from '../../imgs/women with tab 1.png'
import google from '../../imgs/google 1.jpg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"></link>
      <div className={`${Style['main-div']}`}>
        <div className={`col-md-6 ${Style.backG}`}>
          <div className={`${Style.underImg} position-relative col-md-7`}>
            <img src={img1} alt="woman" className={`${Style.womanImg} d-block w-100 col-md-6`} />
            <p className={`position-absolute col-md-6 ${Style.pWoman}`}>Learn <br />TO <br />Earn</p>
          </div>
        </div>
        <div className={`col-md-6 ${Style.loginFormSide}`}>
          <div className={`${Style.smallCard} w-100`}>
            <div className='text-center'>
              <h3 className={`${Style.h3Login} `}>login</h3>
              <p className={`${Style.pLogin}`}>Welcome back to Learn2Earn education platform</p>
            </div>
            <div >
              <form className=''>
                {/* <i className={`fa-regular fa-user ${Style.frameUsername} position-absolute` }></i> */}
                <input type="text" placeholder='Username' className={`form-control w-75 m-auto ${Style.loginForm}`} />
                <input type="password" placeholder='Password' className={`form-control w-75 m-auto ${Style.loginForm} my-4`} />
                <button type='submit' className={`${Style.submitForm} w-75 form-control`}>Login Now</button>
              </form>
              <Link className={`navbar-brand`} to="#">
                <p className={`${Style.forgetPassword} mt-4 mb-4`}>Forget My Password!</p>
              </Link>
              <Link type="button" className={`${Style.loginWithGoogle} d-flex w-75 nav-link form-control m-auto`} to='#'>
                <div className={`text-center mt-1 `}>
                  <img src={google} className={`${Style.googleImg}`} alt="google" />
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
