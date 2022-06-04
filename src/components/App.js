import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";
import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";

const App = () => {
  const initialState = { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
