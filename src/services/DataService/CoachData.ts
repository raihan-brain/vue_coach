import http from "@/services/http-common";
import CoachInfo from "@/types/CoachInfo";
import ResponseData from "@/types/ResponseData";

class CoachData {
  getAllCoachList(): Promise<ResponseData> {
    return http.get("/users.json");
  }
  createCoach(data: CoachInfo): Promise<ResponseData> {
    return http.post("/users.json", data);
  }
}

export default new CoachData();
