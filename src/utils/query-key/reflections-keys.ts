export const reflectionsKeys = {
  all: ["reflections"] as const,
  lists: () => [...reflectionsKeys.all, "lists"] as const,
  // counts: () => [...reflectionsKeys.all, "counts"] as const,
  countsByUser: (username: string) =>
    [...reflectionsKeys.all, "countsByUser", username] as const,
  byUser: (username: string) =>
    [...reflectionsKeys.all, "byUser", username] as const,
  detail: (reflectionUUID: number) =>
    [...reflectionsKeys.all, "detail", reflectionUUID] as const,
};

/*
reflectionsKeys.lists() → 投稿一覧を指すキー。キャッシュの更新等で使う
reflectionsKeys.byUser(username) → 特定のユーザーの投稿一覧を指すキー。キャッシュの更新等で使う
reflectionsKeys.detail(reflectionUUID) → 特定の投稿詳細を指すキー。キャッシュの更新等で使う
*/
