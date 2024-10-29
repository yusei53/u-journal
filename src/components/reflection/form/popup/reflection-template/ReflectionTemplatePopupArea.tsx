import { Box, Popper, Fade } from "@mui/material";
import { Button } from "@/src/components/shared/button";
import {
  ReflectionTemplateType,
  getReflectionTemplateName,
} from "./reflection-templates";
import { theme } from "@/src/utils/theme/theme";

type ReflectionTemplatePopupAreaProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  reflectionTemplateType: ReflectionTemplateType;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  onTemplateSelect: (
    categoryKey: keyof ReflectionTemplateType
  ) => Promise<void>;
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
      <Popper id="template-popper" open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box boxShadow={1} bgcolor="white" borderRadius={1}>
              {Object.keys(reflectionTemplateType).map((categoryKey) => (
                <Button
                  key={categoryKey}
                  onClick={() =>
                    onTemplateSelect(
                      categoryKey as keyof ReflectionTemplateType
                    )
                  }
                  sx={{
                    border: "none",
                    display: "block",
                    textAlign: "left",
                    width: "100%",
                    borderRadius: "none",
                    p: 1.5,
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
              ))}
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default ReflectionTemplatePopupArea;
