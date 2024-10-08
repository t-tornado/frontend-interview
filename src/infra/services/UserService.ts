import { ApiClient } from "../api";

export class UserService {
  private static _instance: UserService;
  private static client: ApiClient;

  private constructor() {}

  static get instance() {
    if (!this._instance) this._instance = new UserService();
    return this._instance;
  }

  static init(client: ApiClient) {
    this.client = client;
  }

  async getUser(params: any) {
    return UserService.client.native.get("/user", { params });
  }
}
