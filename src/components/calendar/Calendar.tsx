import { useReflectionsCount } from "@/src/hooks/reflections-count/useReflectionsCount";
import { getOneYearAgo } from "@/src/utils/date-helper/date-helpers";
import Heatmap from "./Heatmap";
import { ReactCalendarHeatmapValue } from "react-calendar-heatmap";
import { ReflectionPerDate } from "@/src/api/reflections-count-api";
import { getColor } from "@/src/utils/calendar-color-scale/get-color";

type CalendarProps = {
  username: string;
};

export const Calendar: React.FC<CalendarProps> = ({ username }) => {
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

  const startDate = getOneYearAgo();
  const endDate = new Date();

  // classForValue 関数を定義
  const classForValue = (
    value: ReactCalendarHeatmapValue<string> | undefined
  ): string => {
    const reflectionValue = value as ReflectionPerDate | undefined;
    if (!reflectionValue || !reflectionValue.countReflections) {
      return "color-empty";
    }
    return getColor(reflectionValue.countReflections);
  };

  // tooltipDataAttrs 関数を定義
  const tooltipDataAttrs = (
    value: ReactCalendarHeatmapValue<string> | undefined
  ): Record<string, string> | null => {
    if (!value || !value.date) {
      return null;
    }
    const reflectionValue = value as ReflectionPerDate;
    return {
      "data-tip": `${value.date} の投稿数: ${
        reflectionValue.countReflections || 0
      }`,
    };
  };

  return (
    <Heatmap
      startDate={startDate}
      endDate={endDate}
      values={reflectionsCount.reflectionsPerDate}
      classForValue={classForValue}
      tooltipDataAttrs={tooltipDataAttrs}
    />
  );
};
