import getCurrentUser from "./actions/getCurrentUser";
import GoogleLoginForm from "./components/GoogleLoginForm";
import LogoutButton from "./components/LogoutButton";
import reflectionPostsAPI from "./hooks/reflection-post-api";

const Home = async () => {
  const currentUser = await getCurrentUser();
  const data = await reflectionPostsAPI.getReflectionPosts();
  return currentUser ? (
    <>
      <LogoutButton />
      <h1>Reflection Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <>
      <GoogleLoginForm />
    </>
  );
};

export default Home;
