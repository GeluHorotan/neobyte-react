import React from 'react';
import styled from 'styled-components';

const User = ({ children, mapKey }) => {
  return (
    <UserStyles key={mapKey}>
      <h4>{children}</h4>
    </UserStyles>
  );
};

const UserStyles = styled.div`
  width: 10rem;
  height: 15rem;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  box-shadow: 0.3rem 0.3rem 15px #131313;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    text-align: start;

    text-align-last: end;
  }
`;

export default User;
