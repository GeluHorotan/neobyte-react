import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const Homepage = () => {
  const [data, setData] = useState();
  const [dataCopy, setDataCopy] = useState();
  const [searchParams, setSearchParam] = useSearchParams();
  const searchTerm = searchParams.get('name') || '';
  const fetchUsers = async () => {
    const res = await fetch(`/.netlify/functions/getUsers/`);
    const json = await res.json();

    setData(() => json);
    setDataCopy(() => json);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const searchHandler = (event) => {
    const name = event.target.value;
    if (name) {
      setSearchParam({ name });
    } else {
      setSearchParam({});
    }
  };

  return (
    <HomepageStyles>
      <HeaderStyles>
        <img
          src='https://www.neobytesolutions.com/wp-content/uploads/2022/04/logo_Neobyte_solutions-Bold.webp'
          alt=''
        />{' '}
      </HeaderStyles>
      <input
        style={{ marginTop: '10rem' }}
        type='text'
        onChange={searchHandler}
      />

      {dataCopy &&
        dataCopy
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user, index) => {
            return <div key={index}>{user.name}</div>;
          })}
    </HomepageStyles>
  );
};

const HomepageStyles = styled.div`
  width: 100%;
  background: rgb(24, 24, 24);
  height: 100vh;
`;

const HeaderStyles = styled.section`
  width: 100%;

  background: darkred;
  padding: 1rem;
  img {
    width: 10%;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Homepage;
