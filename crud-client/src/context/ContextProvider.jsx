/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import CrudContext from "./CrudContext";
import api from "../api/shopApi";

const ContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const loginStatus = async () => {
    console.log("login click");
    try {
      const response = await api.get("/profile");
      const jsonData = await response;
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // const loginStatus = async () => {
  //   console.log("login click");
  //   try {
  //     const response = await api.get("/message");
  //     const jsonData = await response.data.message;
  //     console.log(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  const value = {
    login,
    loginStatus,
  };

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};

export default ContextProvider;
