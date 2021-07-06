import http from "@/http-common";

class TutorialDataService {
  getAll(): Promise<any> {
    return http.get("/users");
  }

  get(id: any): Promise<any> {
    return http.get(`/users/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/users", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/users/${id}`, data);
  }

  findByEmail(email: string): Promise<any> {
    return http.get(`/users?email=${email}`);
  }
}

export default new TutorialDataService();
