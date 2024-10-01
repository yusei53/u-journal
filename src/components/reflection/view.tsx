import HtmlContent from "./html";
import reflectionPostsAPI from "../../hooks/reflection-api";

const DisplayContent = async () => {
  const data = await reflectionPostsAPI.getReflectionPosts();

  return (
    <div>
      <h1>投稿内容の表示</h1>
      <ul>
        {data.map((post) => (
          <div key={post.reflectionUUID}>
            <h2>{post.title}</h2>
            <HtmlContent title={post.title} content={post.content} />
            <p>{post.createdAt}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayContent;
