import React from "react";
import { observer } from "mobx-react";

const TodosView = (list) => (
    <div>
        {list.list.items.map(e => (
            <p key={e.id}>{e.id}. {e.name}  </p>
          ))}
    </div>
)

export default observer(TodosView);
{/* <span style={{color: 'red', cursor: 'pointer'}} onClick={this.handlerDelTodo.bind(this, e.id)}>X</span> */}