import React, { useState, useEffect } from 'react';

/*
Хук useEffect добавляет возможность повлиять на DOM из функционального компонента. Он служит той же цели, что componentDidMount, componentDidUpdate, and componentWillUnmount in React classes
но объединен в одно API. Этот компонент задает document title после изменения DOM:
*/

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Effect Hook
      </button>
    </div>
  );
}

/*
Когда определяется useEffect, то это говорит React запустить свой "эффект" после завершения изменений в DOM.
Эффекты объявлены внутри компонента, поэтому имеют доступ к props и state.
useEffect может быть вызван несколько раз.

С помощью эффектов компоненты могут почистить после себя с пом возврата функции:
const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
в этом примере React отписывает от API когда компонет unmount.
*/