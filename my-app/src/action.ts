"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getData(filter?: string): Promise<Pokemon[]> {
  const res = await fetch("http://localhost:3001/pokemon", {
    method: "GET",
  });
  const pokemon = await res.json();
  //   console.log(pokemon);
  return pokemon;
}
export async function getPokemonById(id: string): Promise<Pokemon> {
  const res = await fetch("http://localhost:3001/pokemon/" + id, {
    method: "GET",
  });
  const pokemon = await res.json();
  //   console.log(pokemon);
  return pokemon;
}

export async function getPokemonByType(filter: string): Promise<Pokemon[]> {
  const res = await fetch("http://localhost:3001/pokemon?type=" + filter, {
    method: "GET",
  });

  const pokemon = await res.json();
  //   console.log(pokemon);
  return pokemon;
}

export async function createNewPokemon({
  name,
  description,
  weight,
  image,
  type,
}: NewPokemon) {
  const res = await fetch("http://localhost:3001/pokemon", {
    method: "POST",
    body: JSON.stringify({ name, description, weight, image, type }),
    headers: { "Content-Type": "application/json" },
  });

  revalidatePath("/");
  redirect("/");
}

export async function deletePokemon(id: number) {
  await fetch("http://localhost:3001/pokemon/" + id, {
    method: "DELETE",
  });
  revalidatePath("/");
}
