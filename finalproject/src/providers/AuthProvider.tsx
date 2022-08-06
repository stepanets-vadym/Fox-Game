import { fakeAuthProvider } from './FakeAuthProvider';
import * as React from 'react';
import { User } from 'interfaces/User.types';
import { AuthContext } from 'context';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<User | null>(null);

  let signin = (newUser: User, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
      localStorage.removeItem('token');
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
