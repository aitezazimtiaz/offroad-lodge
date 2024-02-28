import Topbar from "@/components/Topbar";
import BackButton from "@/components/ui/BackButton";
import RegisterForm from "./forms/RegisterForm";

export default function Register() {
  return (
    <div className="space-y-2 px-6">
      <Topbar text="Sign Up" showText={true} />
      <div className="flex max-lg:flex-col  w-full p-2">
        <div className="flex items-start justify-start ">
          <BackButton />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="rounded-3xl w-3/4 bg-secondary  p-16 max-lg:p-8  max-sm:w-full max-sm:mt-3">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
