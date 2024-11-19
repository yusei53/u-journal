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
  FunDoneLearn: [
    {
      title: "Fun",
      description: "楽しかったことを思いつく限り書きましょう",
    },
    {
      title: "Done",
      description: "完了したことを思いつく限り書きましょう",
    },
    {
      title: "Learn",
      description: "学んだことを思いつく限り書きましょう",
    },
  ],
  FromResPectedSeniors: [
    {
      title: "今回の振り返りで自分に点数つけたら何点？",
      description: "正直に書きましょう",
    },
    {
      title: "なんで上の点数なの？",
      description: "正直に書きましょう",
    },
    {
      title: "NextAction何する？",
      description: "正直に書きましょう",
    },
  ],
} as const;

export type ReflectionTemplateType = typeof REFLECTION_TEMPLATES;

const reflectionTemplateName: Record<keyof ReflectionTemplateType, string> = {
  GKPT: "GKPT",
  DeveloperReflection: "開発者が使う振り返り手法",
  FunDoneLearn: "Fun・Done・Learn",
  FromResPectedSeniors: "あなたの一番尊敬する先輩から",
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
