"use client";
import Loading from "@/src/app/loading";
import HtmlContent from "./html";
import { useReflections } from "@/src/hooks/reflection/useReflections";

const DisplayContent = () => {
  const { data: reflections, isLoading, error } = useReflections();
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>エラーが発生しました: {error.message}</div>;
  }

  if (!reflections) {
    return undefined;
  }

  return (
    <div>
      <h1>投稿内容の表示</h1>
      {reflections.reflections.map((post) => (
        <div key={post.reflectionCUID}>
          <HtmlContent title={post.title} createdAt={post.createdAt} />
          <p>{post.charStamp}</p>
          <p>{post.user?.username}</p>
          <img src={post.user?.image} />
        </div>
      ))}
    </div>
  );
};

export default DisplayContent;
