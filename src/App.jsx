import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Devs, Maestro } from "./pages";
import { Antiguo } from "./pages/CategoriaAlumno/antiguo";
import { Nuevo } from "./pages/CategoriaAlumno/nuevo";
import { Materiasinscribir } from "./pages/materias/gruposInscribir";
import { Materiasinscribirant } from "./pages/materias/gruposInscribirant";
import { Selecmateriasant } from "./pages/materias/selecmateriasant";
function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Maestro />} />
            <Route path="/nuevo" element={<Nuevo/>}/>
            <Route path="/antiguo" element={<Antiguo/>}/>
            <Route path="/nuevo/grupos" element={<Materiasinscribir/>}/>
            <Route path="/antiguo/materiasInscribir/grupos" element={<Materiasinscribirant/>}/>
            <Route path="/antiguo/materiasInscribir" element={<Selecmateriasant/>}/>

            <Route path="/devs" element={<Devs />} />

            <Route path="*" element={<>Not found 404</>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App
