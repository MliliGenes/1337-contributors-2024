import { useState } from "react";

interface Card {
  props: any;
}

const Card: React.FC<Card> = ({ props }) => {
  const [imgError, setImgError] = useState(false);
  const { firstName, lastName, userName, bio, skills = [] } = props;

  const pfp = `https://github.com/${userName}.png`;
  const avatar = (
    <div className="w-full h-full bg-gradient-to-r from-orange-400 to-orange-600 flex justify-center items-center text-5xl">
      <span>
        {firstName[0]}
        {lastName[0]}
      </span>
    </div>
  );

  const skillsCmp = skills && (
    <div className="flex flex-wrap gap-2">
      {skills?.map((s: string) => (
        <span className="text-sm bg-orange-500 text-white px-2 py-1 rounded-3xl uppercase">
          {s}
        </span>
      ))}
    </div>
  );

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div className="flex flex-col items-center bg-style-1 h-96 justify-center gap-2 rounded border border-orange-500">
      <div className="size-32 rounded-full overflow-hidden">
        {userName && !imgError ? (
          <img
            src={pfp}
            alt={userName}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
        ) : (
          avatar
        )}
      </div>
      <h2 className="text-4xl font-sora">{firstName + " " + lastName}</h2>
      <span>@{userName}</span>
      <p className="mb-5">{bio}</p>
      {skillsCmp}
    </div>
  );
};

export default Card;
