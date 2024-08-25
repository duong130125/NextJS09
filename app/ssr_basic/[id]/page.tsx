import React from "react";
async function fetchData(id: any) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  let data = await response.json();
  return data;
}

export default async function page(params: { params: { id: string } }) {
  let dataUser: any = await fetchData(params.params.id);
  return (
    <div>
      <h1>Chi tiết bài viết</h1>
      <b>{dataUser.title}</b>
      <p>{dataUser.body}</p>
    </div>
  );
}
