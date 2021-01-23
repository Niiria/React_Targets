import React, { useReducer, createContext, ReactNode } from 'react';
import TargetsReducer from './TargetsReducer';
import { Itargets } from './Interfaces';
import { targets } from '../data/targets.json';

const initialState: Itargets = {
  targets: [],
};

export const TargetsContext = createContext<Itargets | any>(initialState);

export type ContexProviderProps = {
  children: ReactNode;
};

export function TargetContextProvider(props: ContexProviderProps) {
  const [state, dispatch] = useReducer(TargetsReducer, initialState);

  const fetchDataAction = () => {
    dispatch({
      type: 'FETCH_DATA_ACTION',
      payload: targets,
    });
  };

  return (
    <TargetsContext.Provider
      value={{ targets: state.targets, dispatch, fetchDataAction }}
    >
      {props.children}
    </TargetsContext.Provider>
  );
}
