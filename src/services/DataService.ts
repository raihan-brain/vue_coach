import http from "@/http-common";

class TutorialDataService {
  getAll(): Promise<any> {
    return http.get("/users.json");
  }

  get(id: any): Promise<any> {
    return http.get(`/users..json/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/users.json", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/users.json/${id}`, data);
  }

  findByEmail(email: string): Promise<any> {
    return http.get(`/users.json?email=${email}`);
  }
}

export default new TutorialDataService();
