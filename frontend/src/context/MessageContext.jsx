import { createContext, useContext, useState } from "react";

export const MessageContext = createContext();

export const useMessageContext = () => {
  return useContext(MessageContext);
};

export const MessageContextProvider = ({ children }) => {
  const [chats, SetChats] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, SetSelectedUser] = useState(null);

  return (
    <MessageContext.Provider
      value={{
        SetChats,
        chats,
        selectedUser,
        SetSelectedUser,users,setUsers
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
