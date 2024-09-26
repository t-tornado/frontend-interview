import { useEffect } from "react";
import { ApiClient } from "../infra/api";
import { UserService } from "../infra/services/UserService";

export function useSetupInfra() {
  const setupServices = () => {
    ApiClient.initMocks();
    const apiClient = ApiClient.instance;
    UserService.init(apiClient);
  };

  useEffect(() => {
    setupServices();
  }, []);
}
