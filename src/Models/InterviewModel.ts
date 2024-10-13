import { Level } from "./Level";

export class InterviewModel {
  public subject: string;
  public level: Level;
  public count: number;

  constructor(subject: string, level: Level, count: number) {
    this.subject = subject;
    this.level = level;
    this.count = count;
  }
}
