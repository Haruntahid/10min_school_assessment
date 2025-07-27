import "./App.css";
import { CourseProvider } from "./context/CourseContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CourseProvider>
        <Home />
      </CourseProvider>
    </>
  );
}

export default App;
