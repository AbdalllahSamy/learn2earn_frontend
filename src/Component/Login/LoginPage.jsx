import React from "react";
import Style from "./Login.module.css";
import img1 from "../../imgs/women with tab 1.png";
import { Outlet } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className={`${Style["main-div"]} overflow-x-hidden`}>
      <div className={` col-md-6 ${Style.backG} baseline fixed`}>
        <div className={`${Style.underImg} col-8 d-flex`}>
          <div className={`${Style.womanDiv}`}>
            <img
              src={img1}
              alt="woman"
              className={`${Style.womanImg} d-block`}
            />
          </div>
          <div className={`${Style.textDiv}`}>
            <p className={`${Style.pWoman}`}>
              Learn <br />
              TO <br />
              Earn
            </p>
          </div>
        </div>
      </div>
      <div className="login-margin">
        <Outlet />
      </div>
    </div>
  );
}
