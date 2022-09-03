import userEvent from '@testing-library/user-event';
import React from 'react';
import styled from 'styled-components';

const User = ({ children, mapKey }) => {
  return (
    <UserStyles key={mapKey}>
      <h5>{children}</h5>
    </UserStyles>
  );
};

const UserStyles = styled.div`
  width: 10rem;
  height: 15rem;
  cursor: pointer;

  box-shadow: 0.3rem 0.3rem 15px #131313;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  position: relative;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  h5 {
    overflow: hidden;

    max-width: 7rem;
    text-overflow: ellipsis;
  }
  &:nth-child(odd) {
    background: linear-gradient(
      90deg,
      rgba(66, 66, 66, 0.38) 3.07%,
      rgba(18, 83, 139, 0.3) 88.06%
    );
  }
  &:nth-child(even) {
    background: linear-gradient(
      90deg,
      rgba(66, 66, 66, 0.38) 3.07%,
      rgba(18, 83, 139, 0.4) 78.06%
    );
  }
  &:hover {
    transform: scale(1.1);
    background: linear-gradient(
      90deg,
      rgba(78, 78, 78, 0.48) 3.07%,
      rgba(21, 92, 155, 0.5) 78.06%
    );
  }
`;

export default User;
