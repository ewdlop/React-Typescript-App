import { Auth0Provider, AppState } from '@auth0/auth0-react';
import { Auth0ProviderOptions } from '@auth0/auth0-react/dist/auth0-provider';
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface Auth0ProviderOptionsWithRedirectCallbackProps extends PropsWithChildren<Auth0ProviderOptions> {};

const Auth0ProviderWithRedirectCallback = ({
    children,
    ...props
  }: PropsWithChildren<Auth0ProviderOptions>) => {
  
    const navigate = useNavigate();
  
    const onRedirectCallback = (appState?: AppState) => {
      navigate((appState && appState.returnTo) || window.location.pathname);
    };
  
    return (
      <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
        {children}
      </Auth0Provider>
    );
  }
  

interface Auth0ProviderProps extends PropsWithChildren<{}>{}

const createAuth0Provider: React.FC<Auth0ProviderProps> = ({ children }) => {
  return (
    <Auth0ProviderWithRedirectCallback
      domain={process.env.REACT_APP_DOMAIN || ""}
      clientId={process.env.REACT_APP_CLIENT_ID || ""}
      authorizationParams={{
        organization: process.env.REACT_APP_ORGANIZATION,
        audience: process.env.REACT_APP_AUDIENCE,
        scope: 'openid profile email',
        redirect_uri: window.location.origin,
      }}>
      {children}
    </Auth0ProviderWithRedirectCallback>
  );
}

export default createAuth0Provider;