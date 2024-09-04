import "./App.css";
import { Sidebar } from "./components/component";
import MainDashboardContainer from "./components/MainDashboardContainer";


function App() {
  return (
    <>
      <Sidebar>
        <MainDashboardContainer/>
      </Sidebar>
    </>
  );
}

export default App;
