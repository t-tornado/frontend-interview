import MockAdapter from "axios-mock-adapter";

import axios, { AxiosInstance } from "axios";
import { MockUsers, User } from "./mock.db";

export class ApiClient {
  private static _instance: ApiClient;
  native: AxiosInstance;
  private static mockAdapter: MockAdapter;

  private constructor() {
    this.native = axios;
    ApiClient.mockAdapter = new MockAdapter(this.native, {
      delayResponse: 2000,
    });
  }

  static get instance() {
    if (!this._instance) this._instance = new ApiClient();
    return this._instance;
  }

  static initMocks() {
    if (!this._instance) this._instance = new ApiClient();

    this.mockAdapter
      .onGet("/user", { params: { email: "anthony", password: "123456" } })
      .reply(200, {
        data: User,
        meta: {
          count: MockUsers.length,
        },
      });
  }
}
