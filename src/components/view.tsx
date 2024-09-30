// 投稿された内容を表示するコンポーネント
import React from "react";
import HtmlContent from "./html";
import reflectionPostsAPI from "../hooks/reflection-post-api";

const DisplayContent = async () => {
  const data = await reflectionPostsAPI.getReflectionPosts();

  return (
    <div>
      <h1>投稿内容の表示</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <HtmlContent title={post.title} content={post.content} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayContent;
