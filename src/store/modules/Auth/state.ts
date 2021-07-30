import { CoachListState } from "./types";

export const state: CoachListState = {
  CoachList: [],
  loggedInUser: {
    id: "",
    name: "",
    email: "",
    course: "",
    image: "",
    student: [],
  },
};
