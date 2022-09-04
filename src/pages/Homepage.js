import React from 'react';
import styled from 'styled-components';
// Components
import UsersList from '../components/UsersList';

const Homepage = () => {
  // Homepage that renders the UsersList component which includes the grid with all the users that come back from the API.
  return (
    <HomepageStyles>
      <UsersList />
    </HomepageStyles>
  );
};

const HomepageStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg');
  padding: 0 14vw;
  color: #fff;
`;

export default Homepage;
