import { notFound } from "next/navigation";
import { reflectionAPI } from "../api/reflection-api";
import RootPage from "./page.client";
import getCurrentUser from "../utils/actions/get-current-user";

const page = async () => {
  const currentUser = await getCurrentUser();

  const result = await reflectionAPI.getReflectionAll();
  if (result === 404) {
    return notFound();
  }

  return (
    <RootPage
      open={false}
      currentUsername={currentUser?.username || null}
      reflections={result.reflections}
    />
  );
};

export default page;
