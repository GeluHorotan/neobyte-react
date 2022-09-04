import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

// Components
import SearchIllustration from './SearchIllustration';
import User from './User';
import { GridLoader } from 'react-spinners';

// Colors
import { vGreen, vOrange } from '../Utility/Colors';

// Animation
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft } from '../Utility/animation';
import { AnimatePresence } from 'framer-motion';

const UsersList = () => {
  // Here, I've created the states I need for this component and I've also used useSearchParams hook to get the parameter from the URL or to place it there, depends of the situation.
  const [data, setData] = useState();
  const [searchParams, setSearchParam] = useSearchParams();

  // Here I stored the search term in a variable by accessing the hook useSearchParam (in case the useSearchParam does't exist, we're gonna leave an empty string)
  //
  const searchTerm = searchParams.get('name') || '';

  const fetchUsers = async () => {
    // Async function that fetches the list of users by calling the node JS serverless function we created.
    const res = await fetch(`/.netlify/functions/getUsers/`);
    const json = await res.json();
    // After getting the JSON, we stored the JSON in a state that we're gonna work with.
    setData(() => json); // O(1) Space Complexity
  };

  useEffect(() => {
    // We call the fetchUsers function in useEffect with an empty array which indicates we want this function to be called once when our page loads.
    fetchUsers();
  }, []);

  const searchHandler = (event) => {
    // This is a function binded on an event, which handles the search operation.
    const name = event.target.value; // O(1) Space Complexity - O(1) Time Complexity
    // We create a variable that holds the input of the search, and if the input exists, we're gonna set the search param to the input, if not, we're gonna set it to an empty object.
    // This function runs everytime it detects a change in our input because it's binded to the onChange event.
    if (name) {
      setSearchParam({ name });
    } else {
      setSearchParam({});
    }
  };

  const filterUsers = (dataSet) => {
    // O(1) Space Complexity and O(n) Time Complexity
    // This function gets as parameter an array and it filters elements based on a function we specify, in our case it's includes function. We also had to convert both, the name of the user to lower case, as well as our searchTerm, in case the user introduces an upper case search term for example. This way we avoid bugs.
    const filteredData = dataSet?.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredData;
  };

  return (
    <WrapperStyles>
      <FilterStyles variants={fadeLeft} initial='hidden' animate='show'>
        <SearchIllustration />
        <FormStyles>
          <input
            type='text'
            className='form_input'
            placeholder=' '
            onChange={searchHandler}
          />
          <label className='form_label'>Search for a user</label>
        </FormStyles>
      </FilterStyles>

      <LoaderContainerStyles>
        {/* Checking if data exists, if not, I am gonna render a spinning loader */}
        {!data && <GridLoader size={30} color={'orange'} />}
        {/* Checking the length of the filtered data and if it's gonna be 0, I am gonna render an error */}
        {filterUsers(data)?.length === 0 && (
          <motion.h3 variants={fadeUp} initial='hidden' animate='show'>
            No user matched your search! Try again.
          </motion.h3>
        )}
      </LoaderContainerStyles>
      <UsersListStyles variants={fadeUp} initial='hidden' animate='show'>
        {/* Checking if data exists, and after data came back from our node JS function, I am gonna use a map function for displaying the data */}
        {/* I've also added a nice layout animation which can be improved in terms of visual aspect */}
        {data &&
          filterUsers(data).map((user, index) => {
            // I've decided to add the index of our element as a key, I know this is bad practice because if an element gets removed from the array, all the elements would re-render because of the index shifting.
            // I didn't have any option to go for in this case because in my data set I didn't have an ID of the user.
            return (
              <motion.div
                key={index}
                layout
                initial={{
                  x: -50,
                }}
                animate={{ x: 0 }}
                transition={{
                  type: 'spring',

                  stifness: 300,

                  duration: 1,
                }}
                exit={{
                  x: -50,
                }}
              >
                <AnimatePresence>
                  <User>{user.name}</User>
                </AnimatePresence>
              </motion.div>
            );
          })}
      </UsersListStyles>
    </WrapperStyles>
  );
};

const WrapperStyles = styled(motion.section)`
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
const FilterStyles = styled(motion.section)`
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
    border: 2px solid ${vOrange};
    border-radius: 5rem;
    font-family: inherit;
    font-size: inherit;
    color: white;
    outline: none;
    padding: 1.25rem;
    &:focus {
      border: 2px solid ${vGreen};
    }
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

const UsersListStyles = styled(motion.div)`
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
