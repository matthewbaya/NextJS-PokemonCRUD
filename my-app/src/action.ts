"use server";

export async function getData(filter?: string): Promise<Pokemon[]> {
  const res = await fetch("http://localhost:3001/pokemon", { method: "GET" });
  const pokemon = await res.json();
  //   console.log(pokemon);
  return pokemon;
}
