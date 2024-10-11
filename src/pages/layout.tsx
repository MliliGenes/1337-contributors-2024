import Header from "@/components/header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-black text-white font-Roboto">
      <Header />
      <main className="flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
