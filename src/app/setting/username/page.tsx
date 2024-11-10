import { reflectionAPI } from "@/src/api/reflection-api";
import getCurrentUser from "@/src/utils/actions/get-current-user";
import { notFound } from "next/navigation";
import RootPage from "../../page.client";

const page = async () => {
  const currentUser = await getCurrentUser();

  const result = await reflectionAPI.getReflectionAll();
  if (result === 404) {
    return notFound();
  }

  return (
    <RootPage
      open
      currentUsername={currentUser?.username || null}
      reflections={result.reflections}
    />
  );
};

export default page;
