import UpdateProfileForm from "./Forms/UpdateProfileForm";

export default function MyAccount() {
  return (
    <>
      <div className="flex p-6 flex-col w-full gap-10">
        <span className="text-heading font-bold text-xl">Personal Account</span>
        <div className="flex w-full justify-center items-center">
          <div className="w-3/5 max-md:w-full flex justify-center items-center">
            <UpdateProfileForm />
          </div>
        </div>
      </div>
    </>
  );
}
