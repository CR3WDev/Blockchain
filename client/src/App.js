import "./App.css";
import { Home } from "./modules/home";
import CountProvider from "./context/count";
export const App = () => {
  return (
    <>
      <CountProvider>
        <Home />
      </CountProvider>
    </>
  );
};
