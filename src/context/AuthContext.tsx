import * as React from 'react';
import * as Keychain from 'react-native-keychain';

interface AuthContext {
    authState: any
    accessToken: string 
    authenticated: boolean
}

const AuthContext = React.createContext<AuthContext | {}>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [authState, setAuthState] = React.useState({
      accessToken: null,
      authenticated: false,
    });
  
    const logout = async () => {
      await Keychain.resetGenericPassword();
      setAuthState({
        accessToken: null,
        authenticated: false,
      });
    };
  
    const getAccessToken = () => {
      return authState.accessToken;
    };
  
    return (
      <AuthContext.Provider
        value={{
          authState,
          getAccessToken,
          setAuthState,
          logout,
        }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;

  const useAuth = () => React.useContext(AuthContext);

  export { useAuth };