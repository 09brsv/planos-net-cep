
// import { data } from 'autoprefixer
import { useState, useEffect } from 'react'
import{ useSearchParams } from 'react-router-dom'
import Button from '../components/Button/Button'
import Cards from '../components/Cards/Cards'
import DadosApi from '../components/DadosApi/DadosApi'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Planos = () => {

  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  
  const [cep,setCep] = useState({})

  useEffect(() => {
    
    return getCep()
  
  }, [])
  
  const getCep = async() => {

      try {
        
        const dataCep = await fetch(`https://viacep.com.br/ws/${query}/json/`)
        .then((response) => response.json())
        .catch((error) => console.error('Cep errado', error))
        return setCep(dataCep)

      } catch (error) {
        console.error('Deu Ruim', error)
      }
  }

  return (
    
    <>
      <Header />
      {cep && (
        <DadosApi
          cidade={cep.localidade}
          uf={cep.uf}
          bairro={cep.bairro}
        ></DadosApi>
      )}
      <Cards />

      <Button nome={"Ops, errei meu cep !"}></Button>
      <Footer />
    </>
  );
}

export default Planos