import React from 'react';

interface FooterProps {
  year: number;
};

const FooterComponent: React.FC<FooterProps> = ({ year }) => {
  return (
    <footer>
      <p>&copy; {year} Footer</p>
    </footer>
  );
};

export default FooterComponent;