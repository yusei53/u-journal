import ReflectionPostPage from "@/components/reflection-post/ReflectionPostPage";
import getCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();
  return <ReflectionPostPage currentUser={currentUser} />;
};

export default page;
