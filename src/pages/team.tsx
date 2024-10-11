import Gird from "@/components/gird";
import ScreenLayout from "@/components/screenlayout";

export default function Team() {
  return (
    <>
      <ScreenLayout className="text-center py-24">
        <h2 className="font-sora text-5xl mb-24">
          Meet Our Talented Contributors
        </h2>
        <Gird />
      </ScreenLayout>
    </>
  );
}
