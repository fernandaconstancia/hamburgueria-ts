import { createContext, useEffect, useContext, useState } from "react";
import { Api } from "../../services/api";
import * as React from "react";
import { HeadersDefaults } from "axios";

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

type User = {
  email: string;
  user: string;
  id: number;
};

type LoginResponse = {
  accessToken: string;
  user: User;
};

type AuthParams = {
  email: string;
  password: string;
};

interface AuthProviderData {
  login: (params: AuthParams) => Promise<void>;
  logout: () => void;
  isSigned: boolean;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const keyStoragePreffix = "@burguerKenzie";

  const [user, setUser] = useState<User>({} as User);

  const setApiHeaders = (token: string) => {
    Api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as CommonHeaderProperties;
  };

  const updateStates = (user: User) => {
    setUser(user);
  };

  const getLocalStorageData = (): { token: string; user: User } => {
    const token = localStorage.getItem(`${keyStoragePreffix}:token`) as string;
    const user: User = JSON.parse(
      localStorage.getItem(`${keyStoragePreffix}:token`) as string
    );
    return {
      token,
      user,
    };
  };

  const updateLocalStorage = (token: string, user: User) => {
    localStorage.setItem(`${keyStoragePreffix}:token`, token);
    localStorage.setItem(`${keyStoragePreffix}:user`, JSON.stringify(user));
  };

  const login = async (params: AuthParams) => {
    try {
      const { data } = await Api.post<LoginResponse>("/login", params);
      updateStates(data.user);
      updateLocalStorage(data.accessToken, data.user);
      setApiHeaders(data.accessToken);
    } catch (error) {}
  };

  const logout = () => {};

  useEffect(() => {
    const { token: storagedToken, user: storagedUser } = getLocalStorageData();
    if (storagedToken && storagedUser) {
      updateStates(storagedUser);
      setApiHeaders(storagedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isSigned: Boolean(user) }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
