import { InterviewModel } from "../Models/InterviewModel";
import { gptService } from "./GptService";

class InterviewService {
  public async getQNA(interview: InterviewModel): Promise<string> {
    // General system . location:
    const systemContent = "Company performing job interview to candidates.";

    // GPT personality and job:
    const assistantContent = `You are an expert in programming technologies. 
    Your job is to generate ${interview.count} job interview questions and answers, 
    each in the field of ${interview.subject}, each in a ${interview.level} difficulty level.
    Each question wrap in a HTML div containing tow HTML paragraphs.
    First HTML paragraph contains a question.
    Second HTML paragraph contains an answer.
    Don't reply with anything else, only the questions and answers. 
    Example: <div><p>Question 1</p><p>Answer 1</p></div><div><p>Question 2</p><p>Answer 2</p></div><div><p>Question 3</p><p>Answer 3</p></div>`;

    // Prompt from the user:
    const userContent = `Here are the questions: `;

    const qna = await gptService.getCompletion(
      systemContent,
      assistantContent,
      userContent
    );

    return qna;
  }
}

export const interviewService = new InterviewService();
