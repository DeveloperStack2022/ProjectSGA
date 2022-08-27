import { createContext, useState } from "react";
import { IContext, IUser, Response } from "./types";
import { LoginRequest, SessionStorage } from "./util";

import jwtDecode from "jwt-decode";
export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>();

  async function authenticate(
    username: string,
    password: string
  ): Promise<Response> {
    let response = await LoginRequest(username, password);

    if (response.error) return { error: true, message: response.message };
    let resultado = jwtDecode(response.token);

    if (resultado)
      setUser({ username: resultado.username, name_rol: resultado.name_rol });
    let dato = JSON.stringify({
      username: resultado.username,
      name_rol: resultado.name_rol,
    });
    SessionStorage(dato, response.token);

    return {
      error: false,
      message: "",
      rol: resultado.name_rol,
    };
  }
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
