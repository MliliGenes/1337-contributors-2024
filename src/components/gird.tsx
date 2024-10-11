import Card from "./card";

export default function Gird() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card
        props={{
          firstName: "Saad",
          lastName: "El Mlili",
          userName: "MliliGenes",
          bio: "i code!",
          skills: ["react", "express", "deno"],
        }}
      />
    </div>
  );
}
