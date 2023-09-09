import React, { PropsWithChildren, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import Footer from "./FooterComponent";
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../features/authSlice';
import { RootState } from "../../stores/store";
import ErrorComponent from "../debug/ErrorComponent";

type LayoutProps = PropsWithChildren<{}>;

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {

  const { isAuthenticated, error, loginWithRedirect, logout } = useAuth0();
  //const [token, setToken, removeToken] = useCookies(['auth0_token']);
  

  if (error) {
    return <ErrorComponent message={error.message}/>
  }
  if (isAuthenticated) {
    return (
      <div className="layout">
        <HeaderComponent />
        <div>{children}</div>
        <button onClick={() => logout()}>
          Log out
        </button>
        <Footer year={20203} />
      </div>)
  }
  else {
    return (<div className="layout">
      <HeaderComponent />
      <div>{children}</div>
      <button onClick={() => loginWithRedirect()}>Log in</button>
      <Footer year={20203} />
    </div>)
  };
}

export default LayoutComponent;