import React from 'react';
import styled from 'styled-components';
import UsersList from '../components/UsersList';

const Homepage = () => {
  return (
    <HomepageStyles>
      <UsersList></UsersList>
    </HomepageStyles>
  );
};

const HomepageStyles = styled.div`
  width: 100%;
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg');
  padding: 0 14vw;
  color: #fff;
`;

export default Homepage;
