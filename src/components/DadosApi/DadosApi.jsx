
const DadosApi = ({cidade, uf, bairro}) => {
  return (
    <section className="max-mob:text-sm text-center">
      <span>Planos para {cidade} - </span>
      <span>{uf}</span>
      <p>Bairro {bairro}</p>
    </section>
  );
}

export default DadosApi