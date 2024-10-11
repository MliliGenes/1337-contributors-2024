import ScreenLayout from "@/components/screenlayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <ScreenLayout
        className="flex flex-col min-h-[660px] justify-center"
        style="bg-style-1"
      >
        <h1 className="font-sora text-7xl mb-8">
          Join Our Elite Team of Contributors.
        </h1>
        <div className="mb-8 text-lg">
          <p>At 1337, we're not just coding – we're crafting the future.</p>
          <p>Be part of a team that's redefining what's possible in tech.</p>
        </div>
        <div className="flex gap-4">
          <a
            href=""
            className="py-2 px-4 rounded text-md bg-orange-600 text-white"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="ml-2">Join on Github</span>
          </a>
          <a
            href=""
            className="py-2 px-4 rounded text-md bg-black bg-opacity-60 border border-orange-600"
          >
            <FontAwesomeIcon icon={faDiscord} />
            <span className="ml-2">Connect on Discord</span>
          </a>
        </div>
      </ScreenLayout>
    </>
  );
}
