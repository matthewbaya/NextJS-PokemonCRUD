import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={pokemon.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          <p className="card-text">{pokemon.description}</p>
          <div className="d-flex justify-content-around">
            <Link href={`/pokemon/${pokemon.id}`} className="btn btn-primary">
              Detail
            </Link>
            <DeleteButton id={pokemon.id} />
          </div>
        </div>
      </div>
    </>
  );
}
