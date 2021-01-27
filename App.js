import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import AppStack from './app/navigator/stack';
import Login from './app/views/login';
import { AuthContext } from './app/components/context';
import AsyncStorage from '@react-native-community/async-storage';
const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userName: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (userName , password) => {
      // setUserToken('afasdf');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if(userName == 'user' && password == 'pass'){
        try{
          userToken = 'asdfasdf';
          await AsyncStorage.setItem('userToken',userToken);
        }catch(e){
          console.log(e);
        }
        
      }
      console.log('userToken: ' , userToken)
      dispatch({ type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async () => {
      try{
        await AsyncStorage.removeItem('userToken');
      }catch(e){
        console.log(e);
      }
      dispatch({ type: 'LOGOUT'});
    },
    signUp: () => {
      setUserToken('afasdf');
      setIsLoading(false);
    },
  }), []);
  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      }catch(e){
        console.log(e);
      }
      console.log('userToken: ' , userToken)
      dispatch({ type: 'TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>

    );

  }
  return (
    <AuthContext.Provider value={authContext}>
      { (loginState.userToken != null) ?
        <AppStack /> :
        <Login />
      }
    </AuthContext.Provider>

  );
}
export default App;


