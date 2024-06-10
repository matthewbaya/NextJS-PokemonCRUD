import Image from "next/image";
import styles from "./page.module.css";
import PokemonCard from "@/components/Card";
import { getData } from "@/action";

export default async function Home() {
  const pokemons = await getData();
  console.log(pokemons);

  return (
    <main>
      <div className="container mt-5">
        <h1 className="display-5">Pokemon List</h1>
        <div className="d-flex justify-content-around flex-wrap gap-5">
          {pokemons.map((e) => {
            return <PokemonCard key={e.id} pokemon={e}></PokemonCard>;
          })}
        </div>
      </div>
    </main>
  );
}
