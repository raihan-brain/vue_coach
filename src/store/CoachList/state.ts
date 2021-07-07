import { CoachListState } from "./types";

export const state: CoachListState = {
  CoachList: [],
  loggedInUser: {
    id: 0,
    name: "",
    email: "",
    course: "",
    image: "",
    student: [],
  },
};
