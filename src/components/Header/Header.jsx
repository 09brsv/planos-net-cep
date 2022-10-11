import { GiNetworkBars } from "react-icons/gi";

export default function Header() {
    
  return (
    <header className="flex justify-between text-right mb-10 pr-9 py-6 rounded-lg bg-cyan-100 bg-gradient-to-r from-cyan-300 backdrop-blur-sm bg-transparent">
      <GiNetworkBars className="ml-9" />
      <h1>Olá, seja bem vindo(a) !</h1>
    </header>
  );
}