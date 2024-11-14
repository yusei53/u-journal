import { notFound } from "next/navigation";
import { reflectionAPI } from "../api/reflection-api";
import RootPage from "./page.client";
import getCurrentUser from "../utils/actions/get-current-user";

// MEMO: routePageのみmetadataをlayout.tsxで設定

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const currentUser = await getCurrentUser();
  const result = await reflectionAPI.getReflectionAll(currentPage);
  if (result === 404) {
    return notFound();
  }

  return (
    <RootPage
      currentUsername={currentUser?.username || null}
      reflections={result.reflections}
      currentPage={currentPage}
      totalPages={result.totalPage}
      open={false}
    />
  );
};

export default page;
