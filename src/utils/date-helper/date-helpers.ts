import { format } from "date-fns";

/**
 * 現在の日時に9時間を加算してJST(日本標準時)の日時を取得する関数
 * @returns {Date} JSTに変換された日時
 */
export const toJST = (date: Date): Date => {
  return new Date(date.getTime() + 9 * 60 * 60 * 1000);
};

/**
 * 今日から1年前の日付を取得する関数（JST）
 * @returns {Date} 1年前の日付
 */
export const getOneYearAgo = (): Date => {
  const now = new Date();
  const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));
  return toJST(oneYearAgo);
};

/**
 * 今日から半年前の日付を取得する関数（JST）
 * @returns {Date} 半年前の日付
 */
export const getHalfYearAgo = (): Date => {
  const now = new Date();
  const halfYearAgo = new Date(now.setMonth(now.getMonth() - 6));
  return toJST(halfYearAgo);
};

/**
 * 今日から半年後の日付を取得する関数（JST）
 * @returns {Date} 半年後の日付
 */
export const getHalfYearLater = (): Date => {
  const now = new Date();
  const halfYearLater = new Date(now.setMonth(now.getMonth() + 6));
  return toJST(halfYearLater);
};

/**
 * ISO8601形式の日付文字列をyyyy/MM/dd形式に変換する関数
 * @returns {string} yyyy/MM/dd形式の日付文字列
 */
export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return format(date, "yyyy/MM/dd");
};
