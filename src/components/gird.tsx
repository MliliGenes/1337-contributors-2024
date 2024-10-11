import Card from "./card";

export default function Gird() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card
        props={{
          firstName: "Saad",
          lastName: "El Mlili",
          userName: "MliliGenes",
          bio: "Full-stack developer with a passion for AI",
          skills: ["JavaScript", "Python", "React", "TensorFlow"],
        }}
      />
      {/* <Card
        props={{
          firstName: "Saad",
          lastName: "El Mlili",
          userName: "MliliGenes",
          bio: "Full-stack developer with a passion for AI",
          skills: ["JavaScript", "Python", "React", "TensorFlow"],
        }}
      />
      <Card
        props={{
          firstName: "Saad",
          lastName: "El Mlili",
          userName: "MliliGenes",
          bio: "Full-stack developer with a passion for AI",
          skills: ["JavaScript", "Python", "React", "TensorFlow"],
        }}
      />*/}
    </div>
  );
}
