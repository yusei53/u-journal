import { Button } from "@/src/components/shared/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return <Button onClick={() => signOut()}>ログアウト</Button>;
};

export default LogoutButton;
