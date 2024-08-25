import React from "react";
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  return data;
}

export default async function page() {
  let dataUser: any = await fetchData();

  return (
    <div>
      Danh sách Bài viết
      <ul>
        {dataUser?.map((item: any) => (
          <li key={item.id}>
            <b>{item.title}</b>
            <p>{item.body.slice(0, 100)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
