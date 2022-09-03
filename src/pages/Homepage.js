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
      <input
        style={{ marginTop: '10rem' }}
        type='text'
        onChange={searchHandler}
      />

      <h1>NEOBYTE</h1>
      <h2>NEOBYTE</h2>
      <h3>NEOBYTE</h3>
      <h4>NEOBYTE</h4>
      <h5>NEOBYTE</h5>
      <h6>NEOBYTE</h6>
      <p>NEOBYTE</p>

      {/* {dataCopy &&
        dataCopy
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user, index) => {
            return <div key={index}>{user.name}</div>;
          })} */}
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
