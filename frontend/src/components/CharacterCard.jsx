import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";

export const CharacterCard = () => {
  const { counter, aumentCounter, decrementCounter, equalCounter } =
    useCounter();
  const { character } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  if (!character) return <Loading />;
  return (
    <>
      {
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={character.image}
            className="card-img-top"
            alt={character.name}
          />
          <div className="card-body">
            <h2>{character.name}</h2>
            <p className="card-text">
              {character.status} {character.gender}
            </p>
          </div>
          <div>
            <ul>
              <li>
                <button type="button" onClick={aumentCounter}>
                  Siguiente personaje
                </button>
              </li>
              <li>
                <button
                  type="button"
                  disabled={counter === 1}
                  onClick={decrementCounter}
                >
                  Anterior
                </button>
              </li>
              {counter > 1 && (
                <li>
                  <button type="button" onClick={equalCounter}>
                    Volver al primer personaje
                  </button>
                </li>
              )}
              <h1>{counter}</h1>
            </ul>
          </div>
        </div>
      }
    </>
  );
};
