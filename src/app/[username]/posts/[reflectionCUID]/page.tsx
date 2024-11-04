import { notFound } from "next/navigation";
import Image from "next/image";
import { reflectionAPI } from "@/src/api/reflection-api";

type PageProps = {
  params: {
    username: string;
    reflectionCUID: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const { reflectionCUID } = params;

  const reflection = await reflectionAPI.getReflectionByCUID(reflectionCUID);
  if (reflection === 404) {
    return notFound();
  }

  return (
    <div>
      <Image src={reflection.userImage} alt="Image" width={100} height={100} />
      <h1>{reflection.title}</h1>
      <p>{reflection.content}</p>
      <p>{reflection.charStamp}</p>
      <p>{new Date(reflection.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Page;
