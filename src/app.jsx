import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorPage from "./pages/404";
import Index from './pages/Index';
import Planos from './pages/Planos';
export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
