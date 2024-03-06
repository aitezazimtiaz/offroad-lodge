import type { PropsWithChildren } from "react";
import HostHeader from "./_components/HostHeader";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";
const HostProfileLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full">
      <HostHeader />
      <div className="w-full h-full">{children}</div>
      <div className="flex flex-col">
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default HostProfileLayout;
