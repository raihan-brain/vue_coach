import http from "@/http-common";

class TutorialDataService {
  getAll(): Promise<any> {
    return http.get("/users.json");
  }

  get(id: any): Promise<any> {
    return http.get(`/users.json/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/users.json", data);
  }

  createStudent(id: any, data: any): Promise<any> {
    return http.post(`/users/${id}/student.json`, data);
  }
  update(id: any, data: any): Promise<any> {
    return http.put(`/users/${id}.json`, data);
  }

  findByEmail(email: string): Promise<any> {
    return http.get(`/users.json?email=${email}`);
  }
}

export default new TutorialDataService();
