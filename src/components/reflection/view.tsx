import HtmlContent from "./html";
import reflectionPostsAPI from "../../api/reflection-api";

const DisplayContent = async () => {
  const data = await reflectionPostsAPI.getReflectionPosts();

  return (
    <div>
      <h1>投稿内容の表示</h1>
      {data.map((post) => (
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
