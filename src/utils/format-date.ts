import { format } from "date-fns";

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return format(date, "yyyy/MM/dd");
};
