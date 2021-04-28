const user = {
  HASH: 'HASH',
  DUPLICATE_USER: 'DUPLICATE_USER',
  DUPLICATE_EMAIL: 'DUPLICATE_EMAIL',
  INSERT_FAILED: 'INSERT_FAILED',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  MISSING_REFRESH_TOKEN: 'MISSING_REFRESH_TOKEN',
  MISSING_USERNAME: 'MISSING_USERNAME',
  MISSING_PASSWORD: 'MISSING_PASSWORD',
  MISSING_EMAIL: 'MISSING_EMAIL',
  TOKEN_INVALID: 'TOKEN_INVALID',
  ALREADY_GITHUB_AUTHENTICATED: 'ALREADY_GITHUB_AUTHENTICATED',
};

const board = {
  INSERT_FAILED: 'INSERT_FAILED',
  EDIT_FAILED: 'EDIT_FAILED',
  DELETE_FAILED: 'DELETE_FAILED',
  GET_FAILED: 'GET_FAILED',
  NOT_ENOUGH_PERMISSIONS: 'NOT_ENOUGH_PERMISSIONS',
  NOT_FOUND: 'NOT_FOUND',
  MISSING_TITLE: 'MISSING_TITLE',
  MISSING_ID: 'MISSING_ID',
  MISSING_NAME: 'MISSING_NAME',
  MISSING_USER_ID: 'MISSING_USER_ID',
  SAME_NAME: 'SAME_NAME',
};

const task = {
  INSERT_FAILED: 'INSERT_FAILED',
  MISSING_BOARD_ID: 'MISSING_BOARD_ID',
  MISSING_TITLE: 'MISSING_TITLE',
  MISSING_DESCRIPTION: 'MISSING_DESCRIPTION',
  TASK_NOT_FOUND: 'TASK_NOT_FOUND',
  GET_FAILED: 'GET_FAILED',
};

const logic = {
  INACCESSIBLE_CODE: 'INACCESSIBLE_CODE',
};

const github = {
  STATE_MISMATCH: 'STATE_MISMATCH',
  MISSING_CODE: 'MISSING_CODE',
  MISSING_STATE: 'MISSING_STATE',
};

module.exports = { user, board, logic, task, github };
