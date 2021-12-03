import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { connect } from "react-redux";

function App({}) { 
  const dispatch = useDispatch();
  const {count, posts} = useSelector(state => state.counterReducer);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      {posts.map((item) => {
        return <p>{item.title}</p>;
      })}
      <button onClick={() => dispatch({ type: "CALL_API" })}> Call api</button>
    </div>
  );
}

export default App;



