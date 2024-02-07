import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useChangeTitle from "./useChangeTitle";
import { useLocation } from "react-router-dom";
export const useCheckValidation = (requiredType) => {
  const location = useLocation();
  const navigateFunction = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    if (auth.type_user !== requiredType) {
      navigateFunction(`/${auth.type_user}`);
    }
  }, [location, location.pathname]);
  useChangeTitle(`L2E | ${auth.type_user}`);
};
