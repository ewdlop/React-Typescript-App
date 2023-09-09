import { ComponentType, FC, PropsWithChildren, useEffect } from 'react';
import { useAuth0, withAuthenticationRequired, WithAuthenticationRequiredOptions } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/store';
import { setToken } from '../../features/authSlice';

type ProtectedProps = WithAuthenticationRequiredOptions & {
  component: ComponentType<any>;
}

interface ComponetWithProtectedProps extends PropsWithChildren<ProtectedProps>{};

const ProtectedComponet: FC<ComponetWithProtectedProps> = ({ component, children, ...args }) => {

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  
  useEffect(() => {
    if (isAuthenticated && token === null) { // Only get token if it doesn't exist yet
      const getToken = async () => {
        var token = await getAccessTokenSilently();
        dispatch(setToken(token));
        console.log(token);
      };
      getToken();
    }
  });

  const Component = withAuthenticationRequired(component, args);
  return <Component>{children}</Component>;
};

export default ProtectedComponet;