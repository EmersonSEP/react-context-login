import { useContext } from "react";
import { CustomerContext } from "../contexts/customer";

export function Hello(){
  const { name } = useContext(CustomerContext)
  return (
    <h1>{name}</h1>
  )
}