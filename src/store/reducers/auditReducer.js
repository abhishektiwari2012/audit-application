import { dummyData } from '../../modules/audit-application/constants';
import { ADD_AUDIT_DATA } from '../actions/auditActions';

const initialState = {
  auditData: dummyData || [],
};

const auditReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUDIT_DATA:
        return { ...state, auditData: [...state.auditData, action.payload] };
        default:
      return state;
  }
};

export default auditReducer;


