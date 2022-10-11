import { Link } from "react-router-dom";

const Button= ({nome}) => {
  return (
    <>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded fixed z-50 bottom-14 right-3">
          {nome}
        </button>
      </Link>
    </>
  );
}

export default Button