import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useChangeTitle from "./useChangeTitle";

export const useCheckValidation = (requiredType) => {
  const navigateFunction = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    if (auth.type_user !== requiredType) {
      navigateFunction(`/${auth.type_user}`);
    }
  }, []);
  useChangeTitle(`L2E | ${auth.type_user}`);
};
