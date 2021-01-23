import { Itargets } from './Interfaces';

export default (state: Itargets, action: any): Itargets => {
  switch (action.type) {

    case 'FETCH_DATA_ACTION':
      return { ...state,  targets: action.payload };

    default:
      return state;
  }
};

