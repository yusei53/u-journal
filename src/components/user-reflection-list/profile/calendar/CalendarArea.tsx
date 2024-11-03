import { Box, Typography, useMediaQuery } from "@mui/material";
import { ReflectionPerDate } from "@/src/api/reflections-count-api";
import "react-calendar-heatmap/dist/styles.css";
import "./calendar.css";
import { theme } from "@/src/utils/theme";
import { ReactCalendarHeatmapValue } from "react-calendar-heatmap";
import { IOSSwitch } from "@/src/components/shared/switch";
import { useToggleJapaneseLabels } from "@/src/hooks/calendar/useToggleJapaneseLabels";
import { memo, useRef } from "react";
import Calendar from "./Calendar";

type CalendarAreaProps = {
  startDate: Date;
  endDate: Date;
  values: ReflectionPerDate[];
  classForValue: (
    value: ReactCalendarHeatmapValue<string> | undefined
  ) => string;
  tooltipDataAttrs: (
    value: ReactCalendarHeatmapValue<string> | undefined
  ) => Record<string, string>;
  totalReflections: string;
};

const CalendarArea: React.FC<CalendarAreaProps> = ({
  startDate,
  endDate,
  values,
  classForValue,
  tooltipDataAttrs,
  totalReflections,
}) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (isSmallScreen) {
    setTimeout(() => {
      scrollContainerRef.current!.scrollLeft =
        scrollContainerRef.current!.scrollWidth;
    }, 0);
  }
  const { calendarRef, isJapanese, handleToggleLabels } =
    useToggleJapaneseLabels();

  return (
    <Box my={5} mx={3}>
      {isSmallScreen && (
        // TODO: コンポーネント化する
        <Box display="flex" alignItems="center" mb={1} mx={1}>
          <Typography fontSize={11} mr={0.8}>
            日本語表示
          </Typography>
          <IOSSwitch onClick={handleToggleLabels} />
        </Box>
      )}
      <Box
        display={"flex"}
        justifyContent={{ md: "space-between" }}
        alignItems={"center"}
        mb={0.5}
      >
        <Typography mx={1} fontSize={isJapanese ? 14 : 16}>
          {isJapanese
            ? `直近1年間で ${totalReflections} 回振り返りをしています`
            : `${totalReflections} reflections in the last year`}
        </Typography>

        {!isSmallScreen && (
          <Box
            display={"flex"}
            alignItems={"center"}
            mx={0.5}
            whiteSpace={"nowrap"}
          >
            <Typography fontSize={11} mr={0.8}>
              日本語表示
            </Typography>
            <IOSSwitch onClick={handleToggleLabels} />
          </Box>
        )}
      </Box>
      <Box
        ref={calendarRef}
        border={`1px solid ${theme.palette.grey[400]}`}
        borderRadius={2}
        p={"12px 16px 8px 4px"}
      >
        {/* MEMO: 900px以下でスクロール可能にするにするためのBoxコンポーネント */}
        <Box
          ref={scrollContainerRef}
          sx={{
            overflowX: isSmallScreen ? "auto" : "visible",
          }}
        >
          <Box minWidth={isSmallScreen ? "780px" : "100%"}>
            <Calendar
              startDate={startDate}
              endDate={endDate}
              values={values}
              classForValue={classForValue}
              tooltipDataAttrs={tooltipDataAttrs}
              showWeekdayLabels
              gutterSize={2}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(CalendarArea);
