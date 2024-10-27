import { Box, Button, Fade, Popper, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { useState } from "react";
import { theme } from "@/src/utils/theme/theme";

type PublishSettingPopupProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const PublishSettingPopup: React.FC<PublishSettingPopupProps> = ({
  value,
  onChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        onBlur={() => setAnchorEl(null)}
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
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        sx={{ zIndex: 100 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box boxShadow={1} borderRadius={2} bgcolor={"white"}>
              <Button
                onClick={() => {
                  onChange(true);
                  setAnchorEl(null);
                }}
                sx={{
                  border: "none",
                  display: "block",
                  textAlign: "left",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.contrastText,
                  },
                }}
                disableRipple
              >
                <Box display={"flex"} alignItems={"center"} color={"black"}>
                  <Image
                    src={"/unlock.png"}
                    alt="Lock Icon"
                    width={18}
                    height={18}
                    style={{ marginRight: 4 }}
                  />
                  公開
                  {value && <CheckIcon fontSize="small" sx={{ ml: 1 }} />}
                </Box>
                <Typography fontSize={12} color={theme.palette.grey[500]}>
                  他の人も見えるようになります
                </Typography>
              </Button>
              <Divider sx={{ borderColor: theme.palette.grey[400] }} />
              <Button
                onClick={() => {
                  onChange(false);
                  setAnchorEl(null);
                }}
                sx={{
                  border: "none",
                  display: "block",
                  textAlign: "left",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.contrastText,
                  },
                }}
                disableRipple
              >
                <Box display={"flex"} alignItems={"center"} color={"black"}>
                  <Image
                    src={"/lock.png"}
                    alt="Lock Icon"
                    width={18}
                    height={18}
                    style={{ marginRight: 4, verticalAlign: "middle" }}
                  />
                  非公開
                  {!value && <CheckIcon fontSize="small" sx={{ ml: 1 }} />}
                </Box>
                <Typography fontSize={12} color={theme.palette.grey[500]}>
                  自分だけが見えるようになります
                </Typography>
              </Button>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default PublishSettingPopup;
