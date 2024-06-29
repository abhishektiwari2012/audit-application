// src/redux/actions/auditActions.js
export const ADD_AUDIT_DATA = 'ADD_AUDIT_DATA';

export const addAuditData = (data) => ({
  type: ADD_AUDIT_DATA,
  payload: data,
});
