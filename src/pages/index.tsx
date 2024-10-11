import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <Button className="bg-white text-black">Button</Button>
    </div>
  );
}
