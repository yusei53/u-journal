import { useUsername } from "@/src/hooks/username/useUsername";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import UsernameModal from "../setting-username/SettingUsernameModal";
import { useRouter } from "next/navigation";

export const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "4文字以上の英数字のみで入力してください。" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "英数字のみで入力してください。",
    }),
});

type SettingUsernameModalContainerProps = {
  open: boolean;
  username?: string;
};

const SettingUsernameModalContainer: React.FC<
  SettingUsernameModalContainerProps
> = ({ open, username }) => {
  const router = useRouter();
  const setUsernameMutation = useUsername();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: username,
    },
  });

  const SubmitUsername = (formData: any) => {
    setUsernameMutation.mutate(
      {
        username: formData.username,
      },
      {
        onSuccess: () => {
          router.push(`/${formData.username}`);
        },
      }
    );
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <UsernameModal
      SubmitUsername={handleSubmit(SubmitUsername)}
      control={control}
      errors={errors}
      open={open}
      onClose={handleClose}
    />
  );
};

export default SettingUsernameModalContainer;
