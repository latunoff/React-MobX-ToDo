import React, { useCallback } from 'react';

const value = useContext(MyContext);
/*
принимает контекст (который возвращает React.createContext) и возвращает текущее значение контекста
*/

const memoizedCallback = useCallback(
    () => {
        doSomething(a, b);
    },
    [a, b],
);
/*
принимает callback и массив зависимостей, вернет запомненный колбэк если хотя бы одна зависимость изменилась
useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)
*/

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
/*
снова выполняет ф-ю если одно из значений зависимостей изменилось, вернет значение.
Эта оптимизация позволяет избежать больших вычислений при каждом рендеринге.
Помните, что useMemo выполняется во время рендеринга, поэтому не нужно выполнять здесь что-то сложное.
Если массив не предоставлен, то значение будет вычисляться при каждом рендеринге.
useMemo можно использовать для оптимизации быстродействия. React может забывать результат ф-ии, поэтому приложение должно работать и без нее.
*/

const refContainer = useRef(initialValue);
/*

*/
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
  /*

  */
 useImperativeHandle(ref, createHandle, [deps])
 function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} />;
  }
  FancyInput = forwardRef(FancyInput);

useDebugValue(value)
/* используется чтобы показать сообщение для custom hooks в React DevTools */
function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    // Show a label in DevTools next to this Hook
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return isOnline;
  }
  /*  для форматирования значения можно применить: */
  useDebugValue(date, date => date.toDateString());