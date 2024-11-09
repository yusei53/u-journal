import { notFound } from "next/navigation";
import { ReflectionDetail } from "@/src/components/reflection-detail/";
import { reflectionAPI } from "@/src/api/reflection-api";
import getCurrentUser from "@/src/utils/actions/get-current-user";

type PageProps = {
  params: {
    username: string;
    reflectionCUID: string;
  };
};

const page = async ({ params }: PageProps) => {
  const { reflectionCUID } = params;

  const currentUser = await getCurrentUser();

  // TODO: fetchURLで実際にapi叩きたいけど何故か404しか返ってこないからserverActionで取得
  const reflection = await reflectionAPI.getReflectionByCUID(reflectionCUID);
  if (
    reflection === 404 ||
    (reflection.userId !== currentUser?.id && !reflection.isPublic)
  ) {
    return notFound();
  }

  return (
    <ReflectionDetail
      title={reflection.title}
      userImage={reflection.user?.image || ""}
      username={reflection.user?.username || ""}
      content={reflection.content}
      createdAt={reflection.createdAt}
    />
  );
};

export default page;
