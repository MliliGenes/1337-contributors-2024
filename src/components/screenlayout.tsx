import { ReactNode } from "react";

interface ScreenLayoutProps {
  children: ReactNode;
  className?: string;
  style?: string;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <section className={style}>
      <div className={"max-w-screen-lg mx-auto px-6 " + className}>
        {children}
      </div>
    </section>
  );
};

export default ScreenLayout;
