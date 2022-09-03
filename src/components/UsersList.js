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
      <div className='form'>
        <input
          style={{ marginTop: '10rem' }}
          type='text'
          className='form_input'
          onChange={searchHandler}
        />
        <label htmlFor='searchHero' className='form_label'>
          Search for a user
        </label>
      </div>
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

  .form {
    position: relative;
    width: 100%;
    height: 3rem;

    .form_input {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.3) 70%
      );
      border: 2px solid black;

      &:focus {
        border: 2px solid red;

        transition: all 250ms ease-in-out;
      }

      border-radius: 0.5rem;

      font-family: inherit;
      font-size: inherit;
      color: white;
      outline: none;
      padding: 1.25rem;
    }

    .form_label {
      position: absolute;
      left: 1rem;
      font-size: 1rem;
      top: 0.8rem;
      padding: 0 0.5rem;
      color: white;
      cursor: text;
      transition: all 250ms ease-in-out;
    }
  }
  .form_input:focus ~ .form_label,
  .form_input:not(:placeholder-shown).form_input:not(:focus) ~ .form_label {
    top: 1.3rem;
    font-size: 0.8rem;
    left: 0rem;
    padding: 0 0.25rem;
  }
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
