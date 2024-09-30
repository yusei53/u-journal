import ReflectionPostPage from "@/src/components/pages/ReflectionPostPage";
import getCurrentUser from "@/src/utils/actions/get-current-user";

const page = async () => {
  const currentUser = await getCurrentUser();
  return <ReflectionPostPage currentUser={currentUser} />;
};

export default page;
