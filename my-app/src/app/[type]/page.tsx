import { getPokemonByType } from "@/action";
import PokemonCard from "@/components/Card";
import { Card } from "react-bootstrap";

export default async function PokemonPerTypePage({
  params,
}: {
  params: { type: string };
}) {
  const { type } = params;

  const data = await getPokemonByType(type);

  return (
    <>
      <main>
        <div className="container mt-5">
          <h1 className="display-5">Pokemon List</h1>
          <div className="d-flex justify-content-around">
            {data.map((e, id) => {
              return <PokemonCard pokemon={e} key={id}></PokemonCard>;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
