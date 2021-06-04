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
  PASSWORD_CHANGE_FAILED: 'PASSWORD_CHANGE_FAILED',
  MISSING_ID: 'MISSING_ID',
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
  MISSING_FULL_NAME: 'MISSING_FULL_NAME',
  MISSING_URL: 'MISSING_URL',
  USER_ALREADY_IN_BOARD: 'USER_ALREADY_IN_BOARD',
  REMOVE_FAILED: 'REMOVE_FAILED',
  CANNOT_REMOVE_PM: 'CANNOT_REMOVE_PM',
  MEMBER_NOT_FOUND: 'MEMBER_NOT_FOUND',
};

const task = {
  INSERT_FAILED: 'INSERT_FAILED',
  MISSING_ID: 'MISSING_ID',
  MISSING_BOARD_ID: 'MISSING_BOARD_ID',
  MISSING_TITLE: 'MISSING_TITLE',
  MISSING_URL: 'MISSING_URL',
  MISSING_BRANCH_NAME: 'MISSING_BRANCH_NAME',
  MISSING_REPO_ID: 'MISSING_REPO_ID',
  MISSING_DESCRIPTION: 'MISSING_DESCRIPTION',
  MISSING_ASSIGNEE_IDS: 'MISSING_ASSIGNEE_IDS',
  MISSING_TARGET_DATE: 'MISSING_TARGET_DATE',
  TASK_NOT_FOUND: 'TASK_NOT_FOUND',
  GET_FAILED: 'GET_FAILED',
  CONNECTION_FAILED: 'CONNECTION_FAILED',
  MOVE_FAILED: 'MOVE_FAILED',
  NOT_ENOUGH_PERMISSIONS: 'NOT_ENOUGH_PERMISSIONS',
};

const logic = {
  INACCESSIBLE_CODE: 'INACCESSIBLE_CODE',
};

const github = {
  STATE_MISMATCH: 'STATE_MISMATCH',
  MISSING_CODE: 'MISSING_CODE',
  MISSING_STATE: 'MISSING_STATE',
  MISSING_REPO_ID: 'MISSING_REPO_ID',
  ALREADY_GITHUB_AUTHENTICATED: 'ALREADY_GITHUB_AUTHENTICATED',
  NOT_GITHUB_AUTHENTICATED: 'NOT_GITHUB_AUTHENTICATED',
};

const repo = {
  CONNECTION_FAILED: 'CONNECTION_FAILED',
  GET_FAILED: 'GET_FAILED',
};

const assignee = {
  INSERT_FAILED: 'INSERT_FAILED',
  GET_FAILED: 'GET_FAILED',
  REPLACE_FAILED: 'REPLACE_FAILED',
};

module.exports = { user, board, logic, task, github, repo, assignee };
