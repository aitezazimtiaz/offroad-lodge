import type { PropsWithChildren } from "react";
import Header from "./_components/Header";


const HostLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full">
     <Header />
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
export default HostLayout;