import React from 'react';
import styled from 'styled-components';

const AppLogo = () => {
  return (
    <Logo>
      <img src="/logo512.png" alt="Todonesia" />
      <span>Todonesia</span>
    </Logo>
  );
};

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  img {
    height: 44px;
    width: 50px;
    object-fit: contain;
  }
  span {
    margin-left: 0.7rem;
    font-size: 1.4rem;
  }
`;

export default AppLogo;
