import {
  ADD_OPERATION_LOG,
  DELETE_OPERATION_LOGS,
} from "../actions/operationLogs";

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      operationLog = {
        description: action.desciption,
        operatedAt: action.operatedAt,
      };
      return [operationLog, ...state];
    case DELETE_OPERATION_LOGS:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
