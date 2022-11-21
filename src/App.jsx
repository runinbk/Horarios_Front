import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Devs, Maestro } from "./pages";
function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Maestro />} />
            <Route path="/devs" element={<Devs />} />
            <Route path="*" element={<>Not found 404</>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App
