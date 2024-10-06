"use client";
import { useParams } from "next/navigation";
import { useReflectionsByUsername } from "@/src/hooks/reflection/useReflectionsByUsername";

const UserReflectionsPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  console.log("Fetched username:", username);

  const {
    data: reflections,
    isLoading,
    error,
  } = useReflectionsByUsername(username);

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラーが発生しました: {error.message}</div>;
  }
  if (!reflections || reflections.length === 0) {
    return <div>このユーザーはまだ投稿をしていません。</div>;
  }

  return (
    <div>
      <h1>{username}さんの投稿一覧</h1>
      {reflections.map((post) => (
        <div key={post.reflectionCUID}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserReflectionsPage;
