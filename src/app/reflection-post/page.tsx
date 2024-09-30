import ReflectionPostPage from "@/src/components/reflection-post/ReflectionPostPage";
import getCurrentUser from "@/utils/actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();
  return <ReflectionPostPage currentUser={currentUser} />;
};

export default page;
