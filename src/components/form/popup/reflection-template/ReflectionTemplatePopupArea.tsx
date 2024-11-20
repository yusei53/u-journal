import { Box, Popper, Fade, Divider, Typography } from "@mui/material";
import { Button } from "@/src/components/shared/button";
import {
  ReflectionTemplateType,
  getReflectionTemplateName,
} from "./reflection-templates";
import { theme } from "@/src/utils/theme";
import { Fragment } from "react";

type ReflectionTemplatePopupAreaProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  reflectionTemplateType: ReflectionTemplateType;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  onTemplateSelect: (
    categoryKey: keyof ReflectionTemplateType
  ) => Promise<void>;
  onClearContent: () => void;
};

const button = {
  border: "none",
  display: "block",
  textAlign: "left",
  width: "100%",
};

const ReflectionTemplatePopupArea: React.FC<
  ReflectionTemplatePopupAreaProps
> = ({
  anchorEl,
  open,
  reflectionTemplateType,
  onClick,
  onClose,
  onTemplateSelect,
  onClearContent,
}) => {
  return (
    <>
      <Button
        onClick={onClick}
        onBlur={onClose}
        sx={{
          border: "none",
          p: 0,
        }}
        disableRipple
      >
        テンプレートを使う
      </Button>
      <Popper open={open} anchorEl={anchorEl} transition sx={{ zIndex: 2 }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box boxShadow={1} bgcolor="white" borderRadius={1}>
              {Object.keys(reflectionTemplateType).map((categoryKey) => (
                <Fragment key={categoryKey}>
                  <Button
                    onClick={() =>
                      onTemplateSelect(
                        categoryKey as keyof ReflectionTemplateType
                      )
                    }
                    sx={{
                      ...button,
                      borderRadius: "none",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.contrastText,
                      },
                    }}
                    disableRipple
                  >
                    {getReflectionTemplateName(
                      categoryKey as keyof ReflectionTemplateType
                    )}
                  </Button>
                  <Divider sx={{ borderColor: theme.palette.grey[400] }} />
                </Fragment>
              ))}
              <Button
                onClick={onClearContent}
                sx={{
                  ...button,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 2,
                  "&:hover": {
                    backgroundColor: theme.palette.warning.main,
                  },
                }}
                disableRipple
              >
                リセット
                <Typography fontSize={10} color={theme.palette.grey[500]}>
                  ※ 文章内の全ての文字が削除されるのでご注意ください
                </Typography>
              </Button>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default ReflectionTemplatePopupArea;
