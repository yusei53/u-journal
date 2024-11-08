import { reflectionAPI } from "@/src/api/reflection-api";
import getCurrentUser from "@/src/utils/actions/get-current-user";
import { notFound } from "next/navigation";
import RootPage from "../../page.client";

const page = async () => {
  const currentUser = await getCurrentUser();

  const result = await reflectionAPI.getReflections();
  if (result === 404) {
    return notFound();
  }

  return (
    <RootPage
      open
      username={currentUser?.username || ""}
      currentUser={currentUser?.id}
      reflections={result.reflections}
    />
  );
};

export default page;
