import React, { useState } from "react";
import { Todo } from "../../shared/todo";

import styles from "./TodoItem.module.scss";

interface Props {
    todo: Todo;
    handleToggle: (todoDone: {}) => void;
}

const TodoItem: React.FunctionComponent<Props> = (props: Props) => {
    const {todo} = props;
    const {handleToggle} = props;

    const onCheck = () => {
        handleToggle(todo);
    };

    return  <div className={styles.todoContainer}>
                <input checked={todo.done} onChange={onCheck} type="checkbox" />   
                <p className={todo.done ? styles.todoCompleted : ''}>
                    {todo.text}
                </p>
            </div>
}

export default TodoItem;
