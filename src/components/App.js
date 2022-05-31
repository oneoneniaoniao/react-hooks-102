import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form style={{ marginBottom: "50px"}}>
        <div className="form-group">
          <label htmlFor="formEventTitle">
            タイトル
          </label>
          <input className="form-control" id="formEventTitle"/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">
            内容
          </label>
          <textarea className="form-control" id="formEventBody"/>
        </div>
        <button className="btn btn-primary">イベントを作成する</button>
        <button style={{ marginLeft: "5px"}} className="btn btn-danger">全てのイベントを削除する</button>
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
          <tr>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;