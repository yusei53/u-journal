import ReflectionPostFormPage from "./page.client";
import getCurrentUser from "@/src/utils/actions/get-current-user";

const page = async () => {
  const currentUser = await getCurrentUser();

  return (
    <ReflectionPostFormPage username={currentUser?.username || undefined} />
  );
};

export default page;
