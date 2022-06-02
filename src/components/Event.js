import React ,{useContext} from 'react';
import {DELETE_EVENT} from "./actions";
import AppContext from "../contexts/AppContext";

const Event = ({event}) => {
  const {dispatch} = useContext(AppContext);
  const handleDelete = (e) => {
    e.preventDefault();
    if(window.confirm(`${event.title}を削除しますか？`)){
      dispatch({
      type: DELETE_EVENT,
      id: event.id,
    });
  };}
  return (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDelete}
        >
          削除
        </button>
      </td>
    </tr>
  );
}
export default Event;