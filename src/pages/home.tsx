import ScreenLayout from "@/components/screenlayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <ScreenLayout
        className="flex flex-col text-center h-[600px] items-center justify-center"
        style="bg-style-1"
      >
        <h1 className="font-sora text-6xl mb-6">
          Join Our Elite Team of <br />
          Contributors
        </h1>
        <p className="text-gray-200 mb-14 text-md">
          At 1337, we're not just coding – we're crafting the future. Be part of
          a team that's redefining what's possible in tech.
        </p>
        <div className="flex gap-4">
          <a href="" className="py-2 px-4 rounded text-md bg-white text-black">
            <FontAwesomeIcon icon={faGithub} />
            <span className="ml-2">Join on Github</span>
          </a>
          <a
            href=""
            className="py-2 px-4 rounded text-md bg-black bg-opacity-60 border border-white  "
          >
            <FontAwesomeIcon icon={faDiscord} />
            <span className="ml-2">Connect on Discord</span>
          </a>
        </div>
      </ScreenLayout>
    </>
  );
}
