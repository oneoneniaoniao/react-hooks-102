import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import Event from "./Event";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
      title: title,
      body: body,
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    if(window.confirm("全てのイベントを削除しますか？")){
      dispatch({
        type: "DELETE_ALL_EVENTS",
      });
    }
  };

  console.log(state);

  const unCreatable = title==="" || body==="";

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form style={{ marginBottom: "50px" }}>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
          イベントを作成する
        </button>
        <button
          onClick={deleteAllEvents}
          style={{ marginLeft: "5px" }}
          className="btn btn-danger"
          disabled={state.length===0}
        >
          全てのイベントを削除する
        </button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event) => (<Event key={event.id} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
