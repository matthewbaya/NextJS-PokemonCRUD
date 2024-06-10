import { getPokemonById } from "@/action";
import "@/styles/DetailPageStyle.css";

export default async function PokemonDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getPokemonById(params.id);
  function changeColor(description: string) {
    if (description === "grass") {
      return "green-text";
    } else if (description === "water") {
      return "blue-text";
    } else if (description === "fire") {
      return "red-text";
    }
  }

  return (
    <div className="container">
      <h1>Detail Pokemon</h1>
      <div className="row border p-5">
        <div className="d-flex">
          <div className="col-4 text-center">
            <img src={data.image} style={{ maxWidth: "20rem" }}></img>
          </div>
          <div className="flex-column">
            <div className="poke">
              <h2>Pokemon Name</h2>
              <p>{data.name}</p>
            </div>
            <div className="poke">
              <h2>Pokemon Weight</h2>
              <p>{data.weight}</p>
            </div>
            <div className="poke">
              <h2>Pokemon Type</h2>
              <p>{data.type}</p>
            </div>
            <div className="poke">
              <h2>Pokemon Description</h2>
              <p className={changeColor(data.description)}>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
