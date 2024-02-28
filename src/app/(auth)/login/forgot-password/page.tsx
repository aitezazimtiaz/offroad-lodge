import Topbar from "@/components/Topbar";
import BackButton from "@/components/ui/BackButton";
import ForgotPassForm from "../forms/ForgotPassForm";

export default function ForgotPassword() {
  return (
    <div className="space-y-2 px-6">
      <Topbar text="Forgot Password" showText={false} />
      <div className="flex max-sm:flex-col  w-full p-2">
        <div className="flex items-start justify-start ">
          <BackButton />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="rounded-3xl w-3/4 bg-secondary  p-16 max-md:p-8  max-sm:w-full max-sm:mt-3">
            <ForgotPassForm />
          </div>
        </div>
      </div>
    </div>
  );
}
