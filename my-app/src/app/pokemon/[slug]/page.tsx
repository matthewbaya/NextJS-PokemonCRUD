"use client";
import { getPokemonById } from "@/action";
import { useParams } from "next/navigation";

export default function PokemonDetail() {
  const { slug } = useParams();
  // console.log(slug);

  const data = getPokemonById(slug.toString());
  console.log(data);

  return (
    <div className="container">
      <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"></img>
      <h1>Detail Pokemon</h1>
      <h2>Pokemon Name</h2>
      <p>nama pokemon</p>
      <h2>Pokemon Weight</h2>
      <p>beratttttttttt</p>
      <h2>Pokemon Type</h2>
      <p>non biner</p>
    </div>
  );
}
