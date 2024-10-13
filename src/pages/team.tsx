import Gird from "@/components/gird";
import ScreenLayout from "@/components/screenlayout";
import { useSelector } from "react-redux";

export default function Team() {
  // @ts-ignore
  const contributors = useSelector((state) => state.members.list);

  return (
    <>
      <ScreenLayout className="text-center py-24">
        <h2 className="font-sora text-3xl lg:text-5xl mb-24">
          Meet Our Talented Contributors
        </h2>
        <Gird contributors={contributors} />
      </ScreenLayout>
    </>
  );
}
