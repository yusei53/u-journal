import { notFound } from "next/navigation";
import { getReflectionByCUID } from "@/src/utils/actions/get-reflection-by-cuid";
import { ReflectionDetail } from "@/src/components/reflection-detail/";

type PageProps = {
  params: {
    username: string;
    reflectionCUID: string;
  };
};

const page = async ({ params }: PageProps) => {
  const { reflectionCUID } = params;

  // TODO: fetchURLで実際にapi叩きたいけど何故か404しか返ってこないからserverActionで取得
  const reflection = await getReflectionByCUID(reflectionCUID);
  if (!reflection) {
    return notFound();
  }

  return (
    <ReflectionDetail
      title={reflection.title}
      userImage={reflection.user.image || ""}
      username={reflection.user.username || ""}
      content={reflection.content}
      createdAt={reflection.createdAt}
    />
  );
};

export default page;
