import { CharacterCard } from "../components/CharacterCard";

export const CharactersPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 py-5">
        <h1 className="text-center mb-4 fw-bold text-primary">
          Personajes de Rick and Morty
        </h1>
        <div className="d-flex justify-content-center">
          <CharacterCard />
        </div>
      </div>
    </div>
  );
};
