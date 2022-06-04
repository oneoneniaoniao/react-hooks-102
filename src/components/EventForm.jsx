import React from "react";
import { useState, useContext } from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "./actions";
import AppContext from "../contexts/AppContext";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title: title,
      body: body,
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    if (window.confirm("全てのイベントを削除しますか？")) {
      dispatch({
        type: DELETE_ALL_EVENTS,
      });
    }
  };

  const unCreatable = title === "" || body === "";
  return (
    <>
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
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          onClick={deleteAllEvents}
          style={{ marginLeft: "5px" }}
          className="btn btn-danger"
          disabled={state.events.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};
export default EventForm;
