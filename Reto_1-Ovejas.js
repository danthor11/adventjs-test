export default function contarOvejas(ovejas) {
  const newOvejas = ovejas.filter((cheep) => {
    if (cheep.color === "rojo") {
      if (
        cheep.name.toLowerCase().includes("n") &&
        cheep.name.toLowerCase().includes("a")
      )
        return cheep;
    }
  });
  return newOvejas;
}
