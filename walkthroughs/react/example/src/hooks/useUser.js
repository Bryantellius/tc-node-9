import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState({});

  async function getUser(username) {
    let res = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
    let user = await res.json();
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, []);

  return { user, getUser };
}
