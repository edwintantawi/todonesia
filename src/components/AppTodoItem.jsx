import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { db } from '../services/firebase';
import { getDate, getTime } from '../utils/reminder';

const AppTodoItem = ({ title, id, isDone, reminder }) => {
  const handleOnChange = (event) => {
    db.collection('todos').doc(id).update({
      isDone: event.target.checked,
    });
  };

  return (
    <TodoItem>
      <TodoCheck>
        <input type="checkbox" checked={isDone} onChange={handleOnChange} />
      </TodoCheck>
      <TodoTask isDone={isDone}>
        <h3>{title}</h3>
        {reminder && (
          <time>
            {getTime(reminder)} | {getDate(reminder)}
          </time>
        )}
      </TodoTask>
    </TodoItem>
  );
};

AppTodoItem.propTypes = {
  title: PropTypes.string,
  isDone: PropTypes.bool,
};

AppTodoItem.defaultProps = {
  isDone: false,
};

const TodoItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 26px 1fr;
  column-gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 0.5rem;
  background-color: ${colors.lightgray};

  @media screen and (min-width: 750px) {
    grid-template-columns: 50px 1fr;
  }
`;

const TodoCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input[type='checkbox'] {
    transform: scale(1.4);
    cursor: pointer;
  }
`;

const TodoTask = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-weight: ${fonts.medium};
    font-size: 0.9rem;
    text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
    color: ${(props) => (props.isDone ? colors.gray : colors.black)};
  }

  time {
    font-size: 0.7rem;
    color: ${colors.gray};
  }

  @media screen and (min-width: 750px) {
    h3 {
      font-size: 0.9rem;
    }
  }
`;

export default AppTodoItem;
