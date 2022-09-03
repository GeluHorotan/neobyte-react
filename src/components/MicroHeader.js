import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const MicroHeader = () => {
  const navigate = useNavigate();
  return (
    <MicroHeaderStyles>
      <NeobyteLogoStyles
        src='https://www.neobytesolutions.com/wp-content/uploads/2022/04/logo_Neobyte_solutions-Bold.webp'
        alt='neobyte_logo'
        onClick={() => {
          navigate('/');
        }}
      />
    </MicroHeaderStyles>
  );
};

const MicroHeaderStyles = styled.section`
  width: 100%;
  padding: 2rem;
  display: flex;
  position: fixed;
  background: transparent;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const NeobyteLogoStyles = styled.img`
  width: 10%;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default MicroHeader;
