import { notFound } from "next/navigation";
import { reflectionAPI } from "../api/reflection-api";
import RootPage from "./page.client";
import getCurrentUser from "../utils/actions/get-current-user";

const page = async () => {
  const currentUser = await getCurrentUser();

  const result = await reflectionAPI.getReflections();
  if (result === 404) {
    return notFound();
  }

  return (
    <RootPage
      open={false}
      currentUser={currentUser?.id}
      reflections={result.reflections}
    />
  );
};

export default page;
