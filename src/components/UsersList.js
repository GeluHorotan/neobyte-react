import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchIllustration from './SearchIllustration';
import User from './User';
import { motion } from 'framer-motion';
import { GridLoader } from 'react-spinners';
import { vOrange, vRed, vGreen } from '../Utility/Colors';

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
    // O(1) Space Complexity and O(n) Time Complexity
    const filteredData = dataSet.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredData;
  };

  return (
    <WrapperStyles>
      <FilterStyles>
        <SearchIllustration />
        <FormStyles>
          <input
            type='text'
            className='form_input'
            placeholder=' '
            onChange={searchHandler}
            style={{
              border: `${
                dataCopy && filterUsers(dataCopy).length === 0
                  ? `2px solid ${vRed}`
                  : `2px solid ${vGreen}`
              } `,
            }}
          />
          <label className='form_label'>Search for a user</label>
        </FormStyles>
      </FilterStyles>
      <LoaderContainerStyles>
        {(!data || !dataCopy) && <GridLoader size={30} color={'orange'} />}
        {dataCopy && filterUsers(dataCopy).length === 0 ? (
          <h3>No user matched your search! Try again.</h3>
        ) : (
          ''
        )}
      </LoaderContainerStyles>
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
  align-items: flex-end;
`;
const LoaderContainerStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FilterStyles = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25vh;
  svg {
    width: 15rem;
    height: 15rem;
  }
`;

const FormStyles = styled.div`
  position: relative;
  width: 50%;

  .form_input {
    width: 100%;
    height: 3rem;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.3) 70%
    );

    transition: all 250ms ease-in-out;

    border-radius: 5rem;
    font-family: inherit;
    font-size: inherit;
    color: white;
    outline: none;
    padding: 1.25rem;
  }

  .form_label {
    position: absolute;
    left: 1rem;
    top: 0.9rem;
    pointer-events: none;
    font-size: 1rem;
    padding: 0 0.5rem;
    color: white;
    cursor: text;
    transition: all 250ms ease-in-out;
  }

  .form_input:focus ~ .form_label,
  .form_input:not(:placeholder-shown).form_input:not(:focus) ~ .form_label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.5rem;
    padding: 0 0.25rem;
    background: #1b1c1e;
  }
`;

const UsersListStyles = styled.div`
  width: 100%;

  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

export default UsersList;
