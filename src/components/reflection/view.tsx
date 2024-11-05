"use client";
import Loading from "@/src/app/loading";
import HtmlContent from "./html";
import { useReflections } from "@/src/hooks/reflection/useReflections";
import UserReflectionListArea from "./UserReflectionListArea";
import ReflectionCard from "./ReflectionCard";

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
  console.log(reflections);
  return (
    <div>
      <h1>投稿内容の表示</h1>

      {reflections.map((post) => (
        <>
          <ReflectionCard username={post.username} reflection={post} />
        </>
      ))}
    </div>
  );
};

export default DisplayContent;
