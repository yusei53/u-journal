import UsernameModal from "../setting-username/SettingUsernameModal";
import { useRouter } from "next/navigation";
import { useUpdateUsernameForm } from "@/src/hooks/username/useUpdateUsernameForm";
import { User } from "@prisma/client";

type SettingUsernameModalContainerProps = {
  open: boolean;
  currentUsername: User["username"];
};

const SettingUsernameModalContainer: React.FC<
  SettingUsernameModalContainerProps
> = ({ open, currentUsername }) => {
  const router = useRouter();
  const { control, isSubmitting, isSubmitSuccessful, errors, onSubmit } =
    useUpdateUsernameForm(currentUsername);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(e);
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <UsernameModal
      onSubmit={handleSubmit}
      control={control}
      errors={errors}
      open={open}
      onClose={handleClose}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
    />
  );
};

export default SettingUsernameModalContainer;
