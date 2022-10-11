import Img from '../assets/img/erro_pag.jpg'
import Button from "../components/Button/Button";

const ErrorPage = () => {
  return (
    <section>

    <div className="h-screen w-screen">
        <img src={Img} className="w-full h-full" alt="Página não encontrada" />
        <Button nome="Voltar a página principal" />
    </div>
  
    </section>
  )
}

export default ErrorPage