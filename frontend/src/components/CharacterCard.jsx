import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { ErrorAd } from "./ErrorAd";
import { Loading } from "./Loading";

export const CharacterCard = () => {
  const { counter, aumentCounter, decrementCounter, equalCounter } =
    useCounter();
  const { character, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  if (loading === true) return <Loading />;
  if (error) return <ErrorAd />;
  if (!character) return <p className="text-center">Cargando personaje...</p>;

  return (
    <>
      {
        <div className="card shadow-sm border-0" style={{ maxWidth: "24rem" }}>
          <img
            src={character.image}
            className="card-img-top"
            alt={character.name}
          />
          <div className="card-body">
            <h3 className="card-title fw-bold text-primary">
              {character.name}
            </h3>
            <p className="card-text text-muted mb-3">
              <span className="badge bg-secondary me-2">
                {character.status}
              </span>
              <span className="badge bg-info">{character.gender}</span>
            </p>
            <div className="d-flex flex-column gap-2 mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={aumentCounter}
              >
                Siguiente Personaje
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                disabled={counter === 1}
                onClick={decrementCounter}
              >
                Anterior
              </button>
              {counter > 1 && (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={equalCounter}
                >
                  Volver al Primero
                </button>
              )}
            </div>
            <div className="text-center">
              <span className="badge bg-dark fs-6">Personaje #{counter}</span>
            </div>
          </div>
        </div>
      }
    </>
  );
};
