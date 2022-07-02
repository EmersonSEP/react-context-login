import { useState, useContext } from "react";
import { CustomerContext } from "../contexts/customer";

export function CustomerForm() {
  const { submit } = useContext(CustomerContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dados componente", {name, email});

    submit({name, email})
  }
  return (
    <form onSubmit={handleSubmit}> 
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="name"
        id="name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
