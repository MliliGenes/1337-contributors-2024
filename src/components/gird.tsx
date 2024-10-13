import { Member } from "@/types/member";
import Card from "./card";

interface Contributors {
  contributors: Member[];
}

const Gird: React.FC<Contributors> = ({ contributors }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {contributors.map((c) => (
        <Card props={c} />
      ))}
    </div>
  );
};

export default Gird;
