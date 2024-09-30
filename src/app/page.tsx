import GoogleLoginForm from "../components/GoogleLoginForm";
import LogoutButton from "../components/LogoutButton";
import DisplayContent from "../components/view";
import reflectionPostsAPI from "../hooks/reflection-post-api";
import getCurrentUser from "../utils/actions/get-current-user";

const Home = async () => {
  const currentUser = await getCurrentUser();
  const data = await reflectionPostsAPI.getReflectionPosts();
  return currentUser ? (
    <>
      <LogoutButton />
      <DisplayContent />
    </>
  ) : (
    <>
      <GoogleLoginForm />
    </>
  );
};

export default Home;
