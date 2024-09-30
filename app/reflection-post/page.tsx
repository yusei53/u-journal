import getCurrentUser from "../actions/getCurrentUser";
import ReflectionPostPage from "../components/reflection-post/ReflectionPostPage";

const page = async () => {
  const currentUser = await getCurrentUser();
  return <ReflectionPostPage currentUser={currentUser} />;
};

export default page;
