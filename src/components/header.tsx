import Logo from "./logo";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-screen">
      <div className="mx-auto max-w-screen-xl flex justify-center items-center px-6 py-4">
        <Logo />
      </div>
    </header>
  );
}
