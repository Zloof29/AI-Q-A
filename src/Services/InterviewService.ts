import { InterviewModel } from "../Models/InterviewModel";
import { gptService } from "./GptService";

class InterviewService {
  public async getQNA(interview: InterviewModel): Promise<string> {
    // General system . location:
    const systemContent = "Company performing job interview to candidates.";

    // GPT personality and job:
    const assistantContent =
      "You are an expert in programming technologies. Your job is to generate job interview questions.";

    // Prompt from the user:
    const userContent = `Generate ${interview.count} job interview questions.
     Each question should be in the field of ${interview.subject} programming technology.
     Each question should be in a ${interview.level} difficulty level.`;

    const qna = await gptService.getCompletion(
      systemContent,
      assistantContent,
      userContent
    );

    return qna;
  }
}

export const interviewService = new InterviewService();
