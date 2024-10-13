import Bnts from "@/components/bnts";
import ScreenLayout from "@/components/screenlayout";

export default function Home() {
  return (
    <>
      <ScreenLayout
        className="flex flex-col min-h-[660px] justify-center"
        style="bg-style-1"
      >
        <h1 className="font-sora text-4xl md:text-7xl mb-8">
          Join Our Elite Team of Contributors.
        </h1>
        <div className="mb-8 text-md md:text-lg">
          The Brilliant Minds Powering 1337's Journey Innovation
        </div>
        <Bnts />
      </ScreenLayout>
    </>
  );
}
