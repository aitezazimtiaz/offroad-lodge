import type { PropsWithChildren } from "react";
import HostTopbar from "./_components/HostTopBar";
const HostLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full">
      <HostTopbar />
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default HostLayout;
