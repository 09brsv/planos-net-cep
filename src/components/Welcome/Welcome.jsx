
const Welcome = () => {
  return (
    <div className="flex flex-col px-3 max-mob:mt-20 mt-28">
        <h1 className="text-5xl max-w-lg px-6 font-serif">Uma internet de qualidade para todos</h1>
        <p className="max-mob:text-sm text-md mt-28 mb-3 p-2 self-center">
        Insira o seu CEP para conhecer as ofertas disponíveis para a sua região !
        </p>
    </div>
  );
}

export default Welcome