import React, { useReducer } from 'react';

//
// typescript
type State = {
  isSignedIn: boolean;
  errorMessage: string;
  token: string;
};

type Action =
  | { type: 'addError'; payload?: string }
  | { type: 'signin'; payload?: any }
  | { type: 'signout'; payload?: string };

type Reducer = (state: State, action: Action) => State;
//
//

export default (reducer: Reducer, actions: object, defaultValue: State) => {
  const Context = React.createContext({});

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };
  return { Provider, Context };
};
