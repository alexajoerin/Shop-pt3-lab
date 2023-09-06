import { ReactNode, useState } from "react";
import UserContext from "./UserContext";
import User from "../../models/User";

interface Props {
  children: ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>({
    _id: "647a5a2dcbd8b27457c3d0ef",
    displayName: "Alexa Joerin",
    darkTheme: true,
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
