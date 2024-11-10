import { notFound } from "next/navigation";
import { ReflectionDetail } from "@/src/components/reflection-detail/";
import { reflectionAPI } from "@/src/api/reflection-api";
import getCurrentUser from "@/src/utils/actions/get-current-user";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { reflectionCUID: string };
}): Promise<Metadata> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/reflection/detail/${params.reflectionCUID}`
  );
  const data = await res.json();

  return {
    title: `${data.title} | u-journal`,
    description: `testだよ`,
  };
};

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
