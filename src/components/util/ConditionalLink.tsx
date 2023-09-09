import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface ConditionalLinkProps {
  path: string;
  content: string;
}

const ConditionalLink: FC<ConditionalLinkProps> = ({ path, content }) => {
  const location = useLocation();

  return (
    location.pathname !== path ? (
      <Link to={path}>{content}</Link>
    ) : (
      <></>
    )
  );
};

export default ConditionalLink;