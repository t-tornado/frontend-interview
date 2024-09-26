import { useSetupInfra } from "../hooks/useSetupInfra";

export const App = () => {
  useSetupInfra();
  return <div>Hi From Savannah Tech</div>;
};
