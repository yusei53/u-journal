import CalendarHeatmap, {
  ReactCalendarHeatmapValue,
} from "react-calendar-heatmap";
import { ReflectionPerDate } from "@/src/api/reflections-count-api";
import "react-calendar-heatmap/dist/styles.css";

type HeatmapProps = {
  startDate: Date;
  endDate: Date;
  values: ReflectionPerDate[];
  classForValue: (
    value: ReactCalendarHeatmapValue<string> | undefined
  ) => string;
  tooltipDataAttrs?: (
    value: ReactCalendarHeatmapValue<string> | undefined
  ) => Record<string, string> | null;
};

const Heatmap: React.FC<HeatmapProps> = ({
  startDate,
  endDate,
  values,
  classForValue,
  tooltipDataAttrs,
}) => {
  return (
    <CalendarHeatmap
      startDate={startDate}
      endDate={endDate}
      values={values}
      classForValue={classForValue}
      tooltipDataAttrs={tooltipDataAttrs}
    />
  );
};

export default Heatmap;
