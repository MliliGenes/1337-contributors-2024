import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Bnts() {
  return (
    <div className="flex flex-col md:flex-row gap-4 text-center">
      <a
        href=""
        className="py-2 px-4 rounded text-md bg-orange-600 text-white hover:underline"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span className="ml-2">Join on Github</span>
      </a>
      <a
        href=""
        className="py-2 px-4 rounded text-md bg-black bg-opacity-60 border border-orange-600 hover:underline"
      >
        <FontAwesomeIcon icon={faDiscord} />
        <span className="ml-2">Connect on Discord</span>
      </a>
    </div>
  );
}
