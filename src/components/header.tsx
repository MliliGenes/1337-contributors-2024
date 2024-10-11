import Links from "./links";
import Logo from "./logo";
import ScreenLayout from "./screenlayout";

export default function Header() {
  return (
    <header className="bg-gray-900">
      <ScreenLayout className="flex justify-between items-center h-14 gap-5">
        <Logo />
        <Links />
      </ScreenLayout>
    </header>
  );
}
