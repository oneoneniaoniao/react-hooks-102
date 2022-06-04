import React from "react";
import { useState, useContext } from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_OPERATION_LOGS, ADD_OPERATION_LOG } from "./actions";
import AppContext from "../contexts/AppContext";
import {timeCurrentIdo8601} from "../utils";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_OPERATION_LOG,
      description: `イベントを追加しました。タイトル: ${title}, 内容: ${body}`,
      operatedAt: timeCurrentIdo8601(),
    })
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
      dispatch({
        type:ADD_OPERATION_LOG,
        description: `全てのイベントを削除しました。`,
        operatedAt: timeCurrentIdo8601(),
      })
    }
  };

  const deleteAllOperationLogs = (e) => {
    e.preventDefault();
    if (window.confirm("全てのログを削除しますか？")) {
      dispatch({
        type: DELETE_OPERATION_LOGS,
      });
    }
  }
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
        <div style={{ marginLeft: "-5px" }}>
          
          <button
            className="btn btn-primary"
            style={{ marginLeft: "5px" }}
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
          <button
            onClick={deleteAllOperationLogs}
            style={{ marginLeft: "5px" }}
            className="btn btn-danger"
            disabled={state.operationLogs.length === 0}
          >
            全てのログを削除する
          </button>
        </div>
      </form>
    </>
  );
};
export default EventForm;
