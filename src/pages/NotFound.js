import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundIllustration from '../components/NotFoundIllustration';
import { vOrange } from '../Utility/Colors';

const NotFound = () => {
  return (
    <ContainerStyles>
      <NotFoundIllustration />
      <Link to='/'>
        <h4>GO HOME</h4>
      </Link>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.section`
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  background: ${vOrange};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  svg {
    width: 99%;
  }
`;

export default NotFound;
