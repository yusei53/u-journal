import { Box, Button as MuiButton } from "@mui/material";
import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { theme } from "@/src/utils/theme/theme";

type EmojiPickerProps = {
  selectedEmoji: string;
  setSelectedEmoji: (emoji: string) => void;
  onChange: (emoji: string) => void;
};

const EmojiPicker: React.FC<EmojiPickerProps> = ({
  selectedEmoji,
  setSelectedEmoji,
  onChange,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <Box
      position={"relative"}
      border={"#ededed solid 1px"}
      borderRadius={"8px"}
      width={"fit-content"}
      display={"inline-flex"}
      alignItems={"center"}
    >
      <MuiButton
        sx={{
          fontSize: "24px",
          borderRadius: "8px 0 0 8px",
          p: 0,
          bgcolor: theme.palette.primary.main,
        }}
        onClick={() => setShowPicker(!showPicker)}
        onBlur={() => setShowPicker(false)}
      >
        {selectedEmoji}
      </MuiButton>
      <Box
        component={"span"}
        color={theme.palette.grey[500]}
        mx={3}
        fontSize={"0.8rem"}
      >
        この振り返りを一つの絵文字で表現してみよう!
      </Box>
      {showPicker && (
        <Box
          position={"absolute"}
          top={"100%"}
          onMouseDown={(e) => e.preventDefault()}
        >
          <Picker
            data={data}
            onEmojiSelect={(emoji: any) => {
              setSelectedEmoji(emoji.native);
              onChange(emoji.native);
              setShowPicker(false);
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default EmojiPicker;
