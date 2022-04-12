import { useState, useEffect } from "react";
import { User } from "../interfaces/User";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //Fetch users, store in state
    const fetchUsers = async () => {
      const response = await fetch(
        "https://still-depths-86703.herokuapp.com/api/users"
      );
      setUsers(await response.json());
    };
    fetchUsers();
  }, []);

  const findUser = (targetID: String) => {
    return users.find((user) => {
     return user._id === targetID;
    });
  };

  return { users, findUser };
};

export default useUsers;
