import { notFound } from "next/navigation";
import { ReflectionDetail } from "@/src/components/reflection-detail/";
import { reflectionAPI } from "@/src/api/reflection-api";
import getCurrentUser from "@/src/utils/actions/get-current-user";
import { Metadata } from "next";
import opengraphAPI from "@/src/api/opengraph-api";

export const generateMetadata = async ({
  params,
}: {
  params: { reflectionCUID: string };
}): Promise<Metadata> => {
  const { reflectionCUID } = params;
  const reflection = await opengraphAPI.getOGPByCUID(reflectionCUID);
  if (reflection === 404) {
    return {
      title: "404 | u-journal",
      description: "このページは見つかりません",
      openGraph: {
        type: "website",
        title: "404 | u-journal",
        description: "このページは見つかりません",
        siteName: "u-journal",
      },
    };
  }

  return {
    title: `${reflection.title} | u-journal`,
    description: `by ${reflection.user.username}`,
    openGraph: {
      type: "website",
      title: `${reflection.title} | u-journal`,
      description: `by ${reflection.user?.username}`,
      siteName: "u-journal",
    },
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
