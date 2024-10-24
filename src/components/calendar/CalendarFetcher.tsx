import { useReflectionsCount } from "@/src/hooks/reflections-count/useReflectionsCount";
import { getOneYearAgo } from "@/src/utils/date-helper/date-helpers";
import Heatmap from "./Calendar";
import { getColor } from "@/src/utils/calendar/get-color";
import { Tooltip } from "react-tooltip";
import { ReactCalendarHeatmapValue } from "react-calendar-heatmap";
import { ReflectionPerDate } from "@/src/api/reflections-count-api";

type CalendarFetcherProps = {
  username: string;
};

export const CalendarFetcher: React.FC<CalendarFetcherProps> = ({
  username,
}) => {
  const startDate = getOneYearAgo();
  const endDate = new Date();

  const {
    data: reflectionsCount,
    isLoading,
    error,
  } = useReflectionsCount(username);
  if (!reflectionsCount) return undefined;

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラーが発生しました: {error.message}</div>;
  }

  const classForValue = (
    value: ReactCalendarHeatmapValue<string> | undefined
  ): string => {
    const reflectionValue = value as ReflectionPerDate | undefined;
    if (!reflectionValue || !reflectionValue.countReflections) {
      return "color-empty";
    }
    return getColor(reflectionValue.countReflections);
  };

  const tooltipDataAttrs = (
    value: ReactCalendarHeatmapValue<string> | undefined
  ): Record<string, string> => {
    const reflectionValue = value as ReflectionPerDate | undefined;
    if (!reflectionValue || !reflectionValue.date) {
      return {};
    }
    return {
      "data-tooltip-id": "tooltip-data-attrs",
      "data-tooltip-content": `${reflectionValue.date} の投稿数: ${reflectionValue.countReflections}`,
    };
  };

  return (
    <>
      <Heatmap
        startDate={startDate}
        endDate={endDate}
        values={reflectionsCount.reflectionsPerDate}
        classForValue={classForValue}
        tooltipDataAttrs={tooltipDataAttrs}
      />
      <Tooltip id="tooltip-data-attrs" />
    </>
  );
};
