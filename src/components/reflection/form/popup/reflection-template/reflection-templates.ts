export const REFLECTION_TEMPLATES = {
  GKPT: [
    { title: "Good", description: "良かったことを思いつく限り書きましょう" },
    { title: "Keep", description: "Goodの中で続けるべきことを書きましょう" },
    {
      title: "Problem",
      description: "良くなかったことを思いつく限り書きましょう",
    },
    { title: "Try", description: "Problemについて改善方法を書きましょう" },
  ],
  DeveloperReflection: [
    {
      title: "やったこと",
      description: "やったことを思いつく限り書きましょう",
    },
    {
      title: "良かったこと",
      description: "良かったことを思いつく限り書きましょう",
    },
    {
      title: "悪かったこと",
      description: "良くなかったことを思いつく限り書きましょう",
    },
    {
      title: "再発防止策",
      description: "悪かったことの改善方法を書きましょう",
    },
  ],
} as const;

export type ReflectionTemplateType = typeof REFLECTION_TEMPLATES;

const reflectionTemplateName: Record<keyof ReflectionTemplateType, string> = {
  GKPT: "GKPT",
  DeveloperReflection: "開発者が使う振り返り手法",
};

export const getReflectionTemplateName = (
  key: keyof ReflectionTemplateType
): string => {
  return reflectionTemplateName[key];
};

/*
ReflectionTemplateTypeは以下のような解釈でもOK(一番はhoverで確認すること)

type ReflectionTemplateType = {
  GKPT: { title: string; description: string }[];
  DeveloperReflection: { title: string; description: string }[];
};
*/
