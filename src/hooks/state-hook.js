import React, { useState } from 'react';

function StateHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);    // 0 - начальное состояние компонента

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        StateHook
      </button>
    </div>
  );
}

export default StateHook;

/*
вызываем useState внутри ф-ии компонента, Чтобы добавить к нему некоторое локальное состояние, React сохраняет это состояние между рендерами.
useState возвращает пару: теукщее значение состояния и ф-ю для его обновления. Эту ф-ю можно вызвать из формы или из хэндлера или от куда-то еще.
Это похоже на this.setState в классе, но оно не объединяет вместе прошлое и новое состояния.
Кстати в отличии от this.state состояние не должно быть объектом, хотя может. Значение состояния инициализации используется при первом рендере.

В одном компоненте можно использовать несколько состояний:
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
Синтаксис деструктуризации массива ([a, b] = ...) позволяет задавать разные имена переменным, которые определяем с пом useState.
*/