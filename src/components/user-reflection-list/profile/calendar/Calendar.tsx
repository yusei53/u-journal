import { Box, Typography } from "@mui/material";
import { ReflectionPerDate } from "@/src/api/reflections-count-api";
import "react-calendar-heatmap/dist/styles.css";
import "./calendar.css";
import { theme } from "@/src/utils/theme";
import CustomCalendarHeatmap from "./CustomCalendarHeatmap";
import { ReactCalendarHeatmapValue } from "react-calendar-heatmap";
import { IOSSwitch } from "@/src/components/shared/switch";
import { useToggleJapaneseLabels } from "@/src/hooks/calendar/useToggleJapaneseLabels";

type CalendarProps = {
  startDate: Date;
  endDate: Date;
  values: ReflectionPerDate[];
  classForValue: (
    value: ReactCalendarHeatmapValue<string> | undefined
  ) => string;
  tooltipDataAttrs: (
    value: ReactCalendarHeatmapValue<string> | undefined
  ) => Record<string, string>;
};

const Calendar: React.FC<CalendarProps> = ({
  startDate,
  endDate,
  values,
  classForValue,
  tooltipDataAttrs,
}) => {
  const { calendarRef, handleToggleLabels } = useToggleJapaneseLabels();

  return (
    <Box
      ref={calendarRef}
      border={`1px solid ${theme.palette.grey[400]}`}
      borderRadius={2}
      p={2}
      pl={0.5}
    >
      <Box textAlign={"right"} mb={1.2}>
        <Typography component={"span"} fontSize={11} mr={0.8}>
          日本語表示
        </Typography>
        <IOSSwitch onClick={handleToggleLabels} />
      </Box>
      <CustomCalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={values}
        classForValue={classForValue}
        tooltipDataAttrs={tooltipDataAttrs}
        showWeekdayLabels
        gutterSize={2}
      />
    </Box>
  );
};

export default Calendar;
