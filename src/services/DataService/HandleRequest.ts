import http from "@/services/http-common";
import CoachInfo from "@/types/CoachInfo";
import ResponseData from "@/types/ResponseData";
import StudentInfo from "@/types/StudentInfo";

class HandleRequest {
  sendStudentRequest(id: string, data: StudentInfo): Promise<ResponseData> {
    return http.post(`/users/${id}/student.json`, data);
  }
  acceptRequestUpdate(
    id: string | undefined,
    data: CoachInfo
  ): Promise<ResponseData> {
    return http.put(`/users/${id}.json`, data);
  }
}

export default new HandleRequest();
