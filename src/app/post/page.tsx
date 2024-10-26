"use client";
import ReflectionPostPage from "@/src/components/pages/ReflectionPostPage";
import { useSession } from "next-auth/react";
import Loading from "../loading";

const Page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  {
    return session ? (
      <ReflectionPostPage
        currentUserId={session.user.id}
        username={session.user.username}
      />
    ) : (
      <div>ddd</div>
    );
  }
};

export default Page;
