import { useReflectionsCount } from "@/src/hooks/reflections-count/useReflectionsCount";
import { getOneYearAgo } from "@/src/utils/date-helper/date-helpers";
import { getColor } from "@/src/utils/calendar/get-color";
import { Tooltip } from "react-tooltip";
import { ReactCalendarHeatmapValue } from "react-calendar-heatmap";
import { ReflectionPerDate } from "@/src/api/reflections-count-api";
import CalendarArea from "./CalendarArea";
import { useCallback } from "react";
import { Loader } from "@/src/components/shared/loading";

type CalendarAreaFetcherProps = {
  username: string;
};

export const CalendarAreaFetcher: React.FC<CalendarAreaFetcherProps> = ({
  username,
}) => {
  const startDate = getOneYearAgo();
  const endDate = new Date();

  const {
    data: reflectionsCount,
    isLoading,
    error,
  } = useReflectionsCount(username);

  const classForValue = useCallback(
    (value: ReactCalendarHeatmapValue<string> | undefined): string => {
      const reflectionValue = value as ReflectionPerDate | undefined;
      if (!reflectionValue || !reflectionValue.countReflections) {
        return "color-empty";
      }
      return getColor(reflectionValue.countReflections);
    },
    []
  );

  const tooltipDataAttrs = useCallback(
    (
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
    },
    []
  );

  if (!reflectionsCount) return undefined;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>エラーが発生しました: {error.message}</div>;
  }

  return (
    <>
      <CalendarArea
        startDate={startDate}
        endDate={endDate}
        values={reflectionsCount.reflectionsPerDate}
        classForValue={classForValue}
        tooltipDataAttrs={tooltipDataAttrs}
        totalReflections={reflectionsCount.totalReflections}
      />
      <Tooltip id="tooltip-data-attrs" />
    </>
  );
};
