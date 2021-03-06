import React from 'react';

import {createContext, ReactNode, useContext} from 'react';
import {View} from 'react-native';
import {GlobalLogics} from '../../global_logic/global_logics';

type TypeOfHighestContext = any;

// 1. createContext
// createContext 를 불러주면 자연스레 빨간줄이 그어짐
// (1)괄호안에 초기값을 넣어줘야하고 (2) 제네릭도 넣어주면 됨

const HighestContext = createContext<TypeOfHighestContext>(GlobalLogics);

// 2. () => useContext(HighestContext)

export const useHighestContext = () => useContext(HighestContext);

// 3. <HighestContext.provider value = {} >
type HighestProvider = {
  children: ReactNode;
};

export const HighestProvider = ({children}: HighestProvider) => {
  return (
    <HighestContext.Provider value={GlobalLogics}>
      {children}
    </HighestContext.Provider>
  );
};
