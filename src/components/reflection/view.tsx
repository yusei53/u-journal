"use client";
import HtmlContent from "./html";
import { useReflections } from "@/src/hooks/reflection/useReflections";

const DisplayContent = () => {
  const { data: reflections, isLoading, error } = useReflections();

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラーが発生しました: {error.message}</div>;
  }

  if (!reflections) {
    return <div>データがありません。</div>;
  }

  return (
    <div>
      <h1>投稿内容の表示</h1>
      {reflections.map((post) => (
        <div key={post.reflectionUUID}>
          <HtmlContent
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayContent;
