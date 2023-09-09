import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { App, HCP } from './pages';
import MedFuseTheme from './themes';
import { Provider } from 'react-redux';
import { setupStore } from './stores';
import ProtectedComponet from './components/auth0/ProtectedComponet';
import createAuth0Provider from './components/auth0/Auth0ProviderComponet';
import ErrorPage from './pages/Error';
import { LayoutComponent } from './components';
import HealthCareProviderPage from './pages/HealthCareProviderPage';
import LoadingComponent from './components/util/LoadingComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: createAuth0Provider({ children: <ProtectedComponet 
      component={(props) => <App LayoutComponent={LayoutComponent} {...props} />} 
      onRedirecting={() => <LoadingComponent />} /> 
    }),
    errorElement: <ErrorPage />
  },
  {
    path: "/hcp",
    element: createAuth0Provider({ children: <ProtectedComponet 
      component={(props) => <HealthCareProviderPage LayoutComponent={LayoutComponent} {...props} />}
      onRedirecting={() => <LoadingComponent />} /> 
    }),
    errorElement: <ErrorPage />
  },
]);


const store = setupStore();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(
//   <React.StrictMode>
//     <Provider store={store} >
//         <ThemeProvider theme={MedFuseTheme}>
//           <CssBaseline />
//             <RouterProvider router={router}/>          
//         </ThemeProvider>
//     </Provider>
//   </React.StrictMode>
// );


root.render(
  <Provider store={store} >
    <ThemeProvider theme={MedFuseTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();