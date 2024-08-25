"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rep) => rep.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <b>Danh sách người dùng</b>
      {user?.map((item: any) => {
        return <li>{item.username}</li>;
      })}
    </div>
  );
}
