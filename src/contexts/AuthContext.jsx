import { createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') || null);
  const [idToken, setIdToken] = useState(localStorage.getItem('id_token') || null);

  return (
    <AuthContext.Provider value={{ accessToken, idToken, setAccessToken, setIdToken }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired,
};

