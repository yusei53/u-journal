import { notFound } from "next/navigation";
import Image from "next/image";
import { getReflectionByCUID } from "@/src/utils/actions/get-reflection-by-cuid";

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
    <div>
      <Image
        src={reflection.user.image || ""}
        alt="Image"
        width={100}
        height={100}
      />
      <p>{reflection.user.username}</p>
      <h1>{reflection.title}</h1>
      <p>{reflection.content}</p>
      <p>{reflection.charStamp}</p>
      <p>{new Date(reflection.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default page;
