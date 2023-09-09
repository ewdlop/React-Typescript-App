import React from "react";
import { useRouteError } from "react-router-dom";
import '../styles/index.css';

const ErrorPage : React.FC = () => {
  const error = useRouteError() as any; // note: this is not the best way to handle this, but it's good enough for this example
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;