import { notFound } from "next/navigation";
import Image from "next/image";

type PageProps = {
  params: {
    username: string;
    reflectionCUID: string;
  };
};

const defaultUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const Page = async ({ params }: PageProps) => {
  const { reflectionCUID } = params;

  const response = await fetch(`${defaultUrl}/api/post/${reflectionCUID}`);

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch reflection");
  }

  const reflection = await response.json();

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
