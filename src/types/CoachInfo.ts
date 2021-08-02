import StudentInfo from "./StudentInfo";

export default interface CoachInfo {
  id?: string;
  name: string;
  email: string;
  course: string;
  password?: string;
  image?: string;
  student?: StudentInfo[];
}
