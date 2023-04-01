import { NavigationActions } from 'react-navigation';

let navigator: any;

export const setNavigator = (nav: object) => {
  navigator = nav;
};

export const navigate = (routeName: string, params: object) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
