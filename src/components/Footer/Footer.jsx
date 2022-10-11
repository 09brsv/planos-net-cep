
import { GrReactjs } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="flex justify-around items-center rounded-md bg-cyan-100 bg-gradient-to-l from-cyan-300 backdrop-blur-md bg-transparent py-3 max-mob:static absolute bottom-0 z-40 w-full">
      <h4>Feito por Bruno Batista</h4>
      <GrReactjs />
    </footer>
  );
}

export default Footer