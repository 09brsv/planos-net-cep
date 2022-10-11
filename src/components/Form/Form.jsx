import { useState } from 'preact/hooks';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate()
    const [events, setEvents] = useState()
    const [cep, setCep] = useState({})

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (events.length < 8){
            
             return window.alert('Digite o cep corretamente')
        }
        
        try {

            const data = await fetch(`https://viacep.com.br/ws/${events}/json/`)
            .then(response => response.json())

            if (data.erro) {
                
                navigate('/404')
                return
            }
            
            setCep(data)
            
        
            navigate(`/planos?q=${data.cep}`)
      
            
        } catch (error) {

            window.alert('CEP incorreto ', error)
            setEvents('')
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
          onChange={(e) => setEvents(e.target.value)}
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
    </section>
  );
}

export default Form