import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((e) => console.error(e));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <>
      <div className="container">
        <h1>Home</h1>
        <form className="form-inline my-4 w-100">
          <input
            type="text"
            className="form-control"
            placeholder="Search pokemon"
            value={search}
            onChange={handleSearch}
          />
        </form>
        <div className="row">
          {filteredPokemons.map((pokemon) => (
            <div className="col-sm-3" key={pokemon.name}>
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img-top"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      pokemon.url.split("/")[6]
                    }.png`}
                    alt={pokemon.name}
                  />
                  <Link
                    className="card-title"
                    to={`/pokemon/${pokemon.url.split("/")[6]}`}
                  >
                    {pokemon.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
