import { notFound } from "next/navigation";
import { reflectionAPI } from "@/src/api/reflection-api";
import getCurrentUser from "@/src/utils/actions/get-current-user";
import { Metadata } from "next";
import opengraphAPI from "@/src/api/opengraph-api";
import dynamic from "next/dynamic";
import { Loading } from "@/src/components/shared/loading";

const ReflectionDetail = dynamic(
  () =>
    import("@/src/components/reflection-detail").then(
      (mod) => mod.ReflectionDetail
    ),
  {
    loading: () => <Loading />,
  }
);

export const generateMetadata = async ({
  params,
}: {
  params: { reflectionCUID: string };
}): Promise<Metadata> => {
  const { reflectionCUID } = params;
  const reflection = await opengraphAPI.getOGPByCUID(reflectionCUID);
  if (reflection === 404) {
    return {
      title: "404",
      description: "このページは見つかりません",
      openGraph: {
        type: "website",
        title: "404 | リフティ",
        description: "このページは見つかりません",
        siteName: "リフティ",
      },
    };
  }

  return {
    title: `${reflection.title}`,
    description: `by ${reflection.user.username}`,
    openGraph: {
      type: "website",
      title: `${reflection.title} | リフティ`,
      description: `by ${reflection.user?.username}`,
      siteName: "リフティ",
    },
    twitter: {
      title: `${reflection.title} | リフティ`,
      description: `by ${reflection.user?.username}`,
      card: "summary_large_image",
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
      userImage={reflection.user.image}
      username={reflection.user.username}
      content={reflection.content}
      createdAt={reflection.createdAt}
    />
  );
};

export default page;
