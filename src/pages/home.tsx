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
        <h1 className="font-sora text-5xl md:text-7xl mb-8">
          Join Our Elite Team of Contributors.
        </h1>
        <div className="mb-8 text-md md:text-lg">
          The Brilliant Minds Powering 1337's Journey Innovation
        </div>
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
      </ScreenLayout>
    </>
  );
}
