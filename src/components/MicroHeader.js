import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MicroHeader = () => {
  const navigate = useNavigate();

  return (
    <MicroHeaderStyles>
      <NeobyteLogoStyles
        src='https://www.neobytesolutions.com/wp-content/uploads/2022/04/logo_Neobyte_solutions-Bold.webp'
        alt='neobyte_logo'
      />
      <TextStyles>
        <h6
          onClick={() => {
            navigate('/');
          }}
        >
          HOME
        </h6>
        <h6
          onClick={() => {
            navigate('/test');
          }}
        >
          Project Details
        </h6>
      </TextStyles>
    </MicroHeaderStyles>
  );
};

const MicroHeaderStyles = styled.section`
  width: 100%;
  position: fixed;
  padding: 2rem;
  background-color: #131338;
  display: flex;
  align-items: center;
`;

const TextStyles = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 24vw;
  h6 {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
  }
`;

const NeobyteLogoStyles = styled.img`
  width: 10%;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  position: absolute;
  left: 5%;
  &:hover {
    transform: scale(1.1);
  }
`;

export default MicroHeader;
