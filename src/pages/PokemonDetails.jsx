import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <h3>{pokemons?.name}</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={pokemons?.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemons?.stats.map((stat) => (
                    <tr key={stat.stat.name}>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
