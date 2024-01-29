import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
export default function GoogleLoginHandler({ style }) {
  const decodeJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  function onSuccessGoogle({ credential }) {
    const { email, sub } = decodeJwt(credential);
    console.log(email, sub);

    const data = {
      email: email,
      gauth_id: sub,
    };

    const api = "https://api-test.llearn2earn.com/api/auth/login-with-google";
    axios
      .post(api, data)
      .then((res) => {
        console.log("Google Login Success:", res);

        // localStorage.setItem("auth", JSON.stringify(res.data));
        // setAuth(res.data);
        // navigateFunction(`/${res.data.type}/dashboard`);
      })
      .catch((err) => {
        console.log("Google Login Error:", err);
      });
  }

  return (
    <div>
      <GoogleLogin
        style={style}
        onSuccess={(res) => {
          onSuccessGoogle(res);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
