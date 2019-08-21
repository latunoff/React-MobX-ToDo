/*
const [state, dispatch] = useReducer(reducer, initialArg, init);
альтернатива для  useState, принимает reducer типа (state, action) => newState и возвращает текущее состояние в паре с методом dispatch (как в Redux)
*/

import React, { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

export default ReducerCounter