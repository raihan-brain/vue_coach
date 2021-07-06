import StudentInfo from "./StudentInfo";

export default interface CoachInfo {
  id: number;
  name: string;
  email: string;
  course: string;
  image?: string;
  student?: StudentInfo[];
}
