import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";
import EventForm from "./EventForm";
import Events from "./Events"

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <EventForm />
      <Events />
    </div></AppContext.Provider>
  );
};

export default App;
