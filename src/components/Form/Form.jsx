import { useState } from 'preact/hooks';
import { useNavigate } from "react-router-dom";

const Form = () => {
    
    const navigate = useNavigate()
    const [events, setEvents] = useState()
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        
        try {

            const dataCep = events.replace('.','')
            const data = await fetch(`https://viacep.com.br/ws/${dataCep}/json/`)
            .then(response => response.json())

            if (data.erro) {
                
                return setErrorMsg("O número do cep não foi encontrado");
                 
            }
      
            navigate(`/planos?q=${data.cep}`)
      
            
        } catch (error) {

            setErrorMsg("Digite o cep corretamente");
            setEvents('');
            return
        }
    }


  return (
    <section className="text-center mb-36">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded-md text-center max-mob:text-sm"
          name="cep"
          placeholder="Digite o seu CEP"
          onChange={(e) => {
            setEvents(e.target.value)
            setErrorMsg('')
          }}
          value={events}
          required
        />
        <button
          type="submit"
          className="bg-cyan-300 rounded-md px-5 py-2 my-3 ml-3 cursor-pointer hover:scale-105 active:scale-1"
        >
          Enviar
        </button>
      </form>
      <p className="text-red-600 text-sm">{errorMsg}</p>
    </section>
  );
}

export default Form