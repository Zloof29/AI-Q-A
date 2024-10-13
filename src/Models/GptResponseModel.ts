export type GptMessageModel = {
  content: string;
};

export type GptChoiceModel = {
  message: GptMessageModel;
};

export type GptResponseModel = {
  choices: GptChoiceModel[];
};
