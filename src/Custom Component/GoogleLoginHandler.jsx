import { GoogleLogin } from "@react-oauth/google";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function GoogleLoginHandler({ style }) {
  const navigateFunction = useNavigate();

  const decodeJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  function onSuccessGoogle({ credential }) {
    const { email, name, sub } = decodeJwt(credential);

    const data = {
      email: email,
      name: name,
      gauth_id: sub,
    };

    const api = "/auth/login-with-google";
    axios
      .post(api, data)
      .then((res) => {
        if (!res.data.data.in_system) {
          data.temp_token = res.data.data.token;
          localStorage.setItem("temp_auth", JSON.stringify(data));
          navigateFunction("/login/complete-profile");
          return 0;
        }
        if (res.data.data.in_system) {
          if (res.data.data.user.is_active) {
            localStorage.setItem("auth", JSON.stringify(res.data.data.user));
            navigateFunction(`/${res.data.data.user.type_user}/dashboard` , { replace: true });
          } else {
            toast.error("Your account is not activated yet", {
              position: "top-right",
              duration: 5000,
              style: {
                backgroundColor: "red",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "red",
              },
            });
          }
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          duration: 5000,
          style: {
            backgroundColor: "red",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "red",
          },
        });
      });
  }

  return (
    <div>
      <GoogleLogin
        style={style}
        onSuccess={(res) => {
          onSuccessGoogle(res);
        }}
        onError={() => {}}
      />
    </div>
  );
}
