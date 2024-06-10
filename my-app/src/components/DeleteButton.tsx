"use client";
import { deletePokemon } from "@/action";

export default function DeleteButton({ id }: { id: number }) {
  function handleDelete(e: any) {
    e.preventDefault;
    deletePokemon(id);
  }
  return (
    <>
      <a href="#" className="btn btn-primary" onClick={handleDelete}>
        Delete
      </a>
    </>
  );
}
