import { Box, Button, Fade, Popper, Divider } from "@mui/material";
import Image from "next/image";
import { theme } from "@/src/utils/theme/theme";
import PublishStatusOptionButton from "./PublishStatusOptionButton";

type PublishSettingPopupProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  open: boolean;
  anchorEl: HTMLElement | null;
  onToggle: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
};

const PublishSettingPopup: React.FC<PublishSettingPopupProps> = ({
  value,
  onChange,
  open,
  anchorEl,
  onToggle,
  onClose,
}) => {
  return (
    <>
      <Button
        aria-describedby="simple-popper"
        onClick={onToggle}
        onBlur={onClose}
        sx={{
          width: "100px",
          border: "none",
          display: "flex",
          alignItems: "center",
          color: "black",
        }}
        disableRipple
      >
        <Image
          src={value ? "/unlock.png" : "/lock.png"}
          alt={value ? "公開アイコン" : "非公開アイコン"}
          width={18}
          height={18}
          style={{ marginRight: 4 }}
        />
        {value ? "公開" : "非公開"}
      </Button>
      <Popper open={open} anchorEl={anchorEl} transition sx={{ zIndex: 100 }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box boxShadow={1} borderRadius={2} bgcolor={"white"}>
              <PublishStatusOptionButton
                isActive={value}
                onClick={() => {
                  onChange(true);
                  onClose();
                }}
                icon="/unlock.png"
                text="公開"
                description="他の人も見えるようになります"
              />
              <Divider sx={{ borderColor: theme.palette.grey[400] }} />
              <PublishStatusOptionButton
                isActive={!value}
                onClick={() => {
                  onChange(false);
                  onClose();
                }}
                icon="/lock.png"
                text="非公開"
                description="自分だけが見えるようになります"
              />
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default PublishSettingPopup;
