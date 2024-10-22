import { Button, Box } from "@mui/material";
import UsernameModal from "./UsernameModal";

export type UsernameFormProps = {
  SubmitUsername: (event: React.FormEvent<HTMLFormElement>) => void;
  control: any;
  errors: any;
  handleToggle: (boolean: boolean) => void;
  modalOpen: boolean;
};

const UsernameForm: React.FC<UsernameFormProps> = ({
  SubmitUsername,
  control,
  errors,
  handleToggle,
  modalOpen,
}) => {
  return (
    <>
      <Box bgcolor={"#13396E"} color={"white"}>
        <Button onClick={() => handleToggle(true)}>Open modal</Button>
      </Box>
      <UsernameModal
        SubmitUsername={SubmitUsername}
        control={control}
        errors={errors}
        handleToggle={handleToggle}
        modalOpen={modalOpen}
      />
    </>
  );
};

export default UsernameForm;
