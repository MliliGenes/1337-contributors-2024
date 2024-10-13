import { useState } from "react";

interface Card {
  props: any;
}

const Card: React.FC<Card> = ({ props }) => {
  const [imgError, setImgError] = useState(false);
  const { firstName, lastName, userName, bio, skills = [] } = props;

  const pfp = `https://github.com/${userName}.png`;

  const skillsCmp = (
    <div className="flex flex-wrap gap-2 px-12 justify-center">
      {skills?.map((s: string) => (
        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-3xl capitalize cursor-pointer">
          {s}
        </span>
      ))}
    </div>
  );

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div className="flex flex-col  bg-style-2 min-h-[420px] py-12 items-center gap-3 rounded-md border-[0.5px] border-orange-500 border-opacity-30 hover:border-orange-500 transition-all duration-150 ease-in">
      <div className="size-32 rounded-full overflow-hidden bg-gradient-to-r from-orange-400 to-orange-600 flex justify-center items-center text-5xl outline outline-2 outline-orange-400 outline-offset-2">
        {userName && !imgError ? (
          <img
            src={pfp}
            alt={userName}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>
            {firstName[0]}
            {lastName[0]}
          </span>
        )}
      </div>
      <h2 className="text-2xl lg:text-4xl font-sora">
        <span className="text-orange-500">{firstName}</span>{" "}
        <span>{lastName}</span>
      </h2>
      <span className="text-orange-400 text-sm">@{userName}</span>
      <p className="mb-5 text-md capitalize px-6">{bio}</p>
      {skills.length > 0 && skillsCmp}
    </div>
  );
};

export default Card;
