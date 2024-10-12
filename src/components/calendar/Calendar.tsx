import { useReflectionsCount } from "@/src/hooks/reflections-count/useReflectionsCount";
import { getOneYearAgo, toJST } from "@/src/utils/date-helper/date-helpers";
import CalendarHeatmap, {
  ReactCalendarHeatmapValue,
} from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
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
  const startDate = getOneYearAgo();
  const endDate = toJST(new Date());

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    // TODO: このエラーメッセージはいろんなところで使い回しできるので共通コンポーネント実装したい
    return <div>エラーが発生しました: {error.message}</div>;
  }
  return (
    <CalendarHeatmap
      startDate={startDate}
      endDate={endDate}
      values={reflectionsCount.reflectionsPerDate}
      classForValue={(value: ReactCalendarHeatmapValue<string> | undefined) => {
        // valueをReflectionPerDateとして扱う
        const reflectionValue = value as ReflectionPerDate | undefined;

        if (!reflectionValue || !reflectionValue.countReflections) {
          return "color-empty";
        }
        return getColor(reflectionValue.countReflections);
      }}
      tooltipDataAttrs={(value: { date: any; count: any }) => {
        if (!value || !value.date) {
          return null;
        }
        return {
          "data-tip": `${value.date} has count: ${value.count}`,
        };
      }}
    />
  );
};
