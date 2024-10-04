export const reflectionsKeys = {
  all: ["reflections"] as const,
  lists: () => [...reflectionsKeys.all, "lists"] as const,
  detail: (reflectionUUID: number) =>
    [...reflectionsKeys.details(), reflectionUUID] as const,
};

/*
reflectionsKeys.lists() → 投稿一覧を指すキー。キャッシュの更新等で使う
reflectionsKeys.detail(reflectionUUID) → 特定の投稿詳細を指すキー。キャッシュの更新等で使う
*/
