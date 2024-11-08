import SettingUsernameModalContainer from "@/src/components/setting-username/SettingUsernameModalContainer";
import getCurrentUser from "@/src/utils/actions/get-current-user";

const Page = async () => {
  const currentUser = await getCurrentUser();

  return (
    <SettingUsernameModalContainer
      open
      username={currentUser?.username || ""}
    />
  );
};

export default Page;
