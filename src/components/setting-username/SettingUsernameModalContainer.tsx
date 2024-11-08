import UsernameModal from "../setting-username/SettingUsernameModal";
import { useRouter } from "next/navigation";
import { useUpdateUsernameForm } from "@/src/hooks/username/useUpdateUsernameForm";

type SettingUsernameModalContainerProps = {
  open: boolean;
  username?: string;
};

const SettingUsernameModalContainer: React.FC<
  SettingUsernameModalContainerProps
> = ({ open, username }) => {
  const router = useRouter();
  const { control, isSubmitting, errors, onSubmit } =
    useUpdateUsernameForm(username);

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
    />
  );
};

export default SettingUsernameModalContainer;
