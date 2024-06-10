import { getPokemonById } from "@/action";

export default async function PokemonDetail({
  params,
}: {
  params: { id: string };
}) {
  // console.log(params);

  const data = await getPokemonById(params.id);
  // console.log(data);

  return (
    <div className="container">
      <img src={data.image}></img>
      <h1>Detail Pokemon</h1>
      <h2>Pokemon Name</h2>
      <p>{data.name}</p>
      <h2>Pokemon Weight</h2>
      <p>{data.weight}</p>
      <h2>Pokemon Type</h2>
      <p>{data.type}</p>
    </div>
  );
}
