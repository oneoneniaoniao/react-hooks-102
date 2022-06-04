import React, { useContext } from "react";
import { DELETE_EVENT, ADD_OPERATION_LOG } from "./actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIdo8601 } from "../utils";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm(`${event.title}を削除しますか？`)) {
      dispatch({
        type: DELETE_EVENT,
        id: event.id,
      });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `${event.title}を削除しました`,
        operatedAt: timeCurrentIdo8601(),
      });
    }
  };
  return (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          削除
        </button>
      </td>
    </tr>
  );
};
export default Event;
