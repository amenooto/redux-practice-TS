import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./reducers";
import {fetchPosts} from "./actions/posts";

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

interface Post {
    userId: number;
    id: number;
    title: string;
}

function App({ value, onIncrement, onDecrement }: Props) {

    const todos: string[] = useSelector((state: RootState) => state.todos)
    const counter = useSelector((state: RootState) => state.counter);
    const posts: Post[] = useSelector((state: RootState) => state.post);

    const dispatch = useDispatch();

    const [todoValue, setTodoValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value);
    }

    const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            text: todoValue
        })
        setTodoValue("");
    }

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])


  return (
      <div className="App">
        <p>
          Clicked: {counter} times
          {' '}
          <button onClick={onIncrement}>+</button>
          {' '}
          <button onClick={onDecrement}>-</button>
        </p>

          <ul>
              {todos.map((todo, index) => <li key={index}>{todo}</li>)}
          </ul>
          <form onSubmit={addTodo}>
              <input type="text" value={todoValue} onChange={handleChange}/>
              <input type="submit"/>
          </form>

          <ul>
              {posts.map((item, index) => <li key={index}>{item.title}</li>)}
          </ul>
      </div>
  );
}

export default App;
