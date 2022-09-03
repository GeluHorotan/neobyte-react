import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import User from './User';

const UsersList = () => {
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

  const filterUsers = (dataSet) => {
    const filteredData = dataSet.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredData;
  };
  return (
    <WrapperStyles>
      <input
        style={{ marginTop: '10rem' }}
        type='text'
        onChange={searchHandler}
      />
      <UsersListStyles>
        {dataCopy &&
          filterUsers(dataCopy).map((user, index) => {
            return <User mapKey={index}>{user.name}</User>;
          })}
      </UsersListStyles>
    </WrapperStyles>
  );
};

const WrapperStyles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UsersListStyles = styled.div`
  width: 100%;
  border: 1px solid darkcyan;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

export default UsersList;
