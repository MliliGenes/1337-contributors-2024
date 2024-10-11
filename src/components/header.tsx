import Links from "./links";
import Logo from "./logo";
import ScreenLayout from "./screenlayout";

export default function Header() {
  return (
    <header>
      <ScreenLayout
        style="bg-style-1"
        className="flex justify-between items-center h-16 gap-5"
      >
        <Logo />
        <Links />
      </ScreenLayout>
    </header>
  );
}
