import React from 'react';

const Event = ({event, dispatch}) => {
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE_EVENT",
      id: event.id,
    });
  };
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