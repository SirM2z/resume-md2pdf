import * as React from 'react';

import './Header.css';

interface headerProps {
  title: string;
}

const Header = (props: headerProps) => {
  const { title } = props;
  return (
    <header className="header">{title}</header>
  );
};

export default Header;
