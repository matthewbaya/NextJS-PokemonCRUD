"use client";
import { createNewPokemon } from "@/action";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CreatePokemon() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name) {
      //   setError("Please input the Pokemon's name");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input the Pokemon's name",
      });
    } else if (!description) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input the Pokemon's description",
      });
    } else if (!weight) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input the Pokemon's weight",
      });
    } else if (!image) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input the Pokemon's image",
      });
    } else if (!type) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input the Pokemon's type",
      });
    } else {
      createNewPokemon({ name, description, weight, image, type });
    }
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Add New Pokemon</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Weight</label>
            <input
              type="text"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="text"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>

            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option selected disabled>
                {" Select Pokemon's Type"}
              </option>
              <option value={"fire"}>Fire</option>
              <option value={"water"}>Water</option>
              <option value={"grass"}>Grass</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Add new Pokemon
          </button>
        </form>
      </div>
    </>
  );
}
