import { SubmissionStatus } from "../utils/consts";

export class ProblemClass {
    index: string;
    contestID: number;
    problemID: string;
    name: string;
    tags: string[];
    rating: number | undefined;
    problemsetLink: string;
    contestLink: string;
    submissionStatus: string;

    constructor (contestID: number, problemIndex: string, problemName:string = '', tags:string[] = [], rating:number = 0) {
        this.index = problemIndex;
        this.contestID = contestID;
        this.problemID = contestID + problemIndex;
        this.name = problemName;
        this.tags = tags;
        this.rating = rating;
        this.problemsetLink = `https://codeforces.com/problemset/problem/${contestID}/${problemIndex}`;
        this.contestLink = `https://codeforces.com/contest/${contestID}/problem/${problemIndex}`;
        this.submissionStatus = SubmissionStatus.unattempted;
    }
};