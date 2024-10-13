import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { GptResponseModel } from "../Models/GptResponseModel";

class GptService {
  public async getCompletion(
    systemContent: string,
    assistantContent: string,
    userContent: string
  ): Promise<string> {
    const requestBody = {
      model: "GPT-4o",
      messages: [
        { role: "system", content: systemContent },
        { role: "assistant", content: assistantContent },
        { role: "user", content: userContent },
      ],
    };

    const options = {
      headers: {
        authorization: "Bearer " + appConfig.apiKey,
      },
    };

    const axiosResponse = await axios.post<GptResponseModel>(
      appConfig.gptUrl,
      requestBody,
      options
    );

    const gptResponse = axiosResponse.data;

    const completion = gptResponse.choices[0].message.content;

    return completion;
  }
}

export const gptService = new GptService();
