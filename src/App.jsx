import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Devs, Maestro } from "./pages";
import { Antiguo } from "./pages/CategoriaAlumno/antiguo";
import { Nuevo } from "./pages/CategoriaAlumno/nuevo";
function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Maestro />} />
            <Route path="/nuevo" element={<Nuevo/>}/>
            <Route path="/antiguo" element={<Antiguo/>}/>

            <Route path="/devs" element={<Devs />} />

            <Route path="*" element={<>Not found 404</>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App
