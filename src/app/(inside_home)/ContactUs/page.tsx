import ContactForm from "./ContactForm/ContactUsForm";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex w-full justify-between  max-md:justify-center max-md:flex-col  px-10 max-sm:px-4">
      <div className="flex flex-col w-[50%] max-lg:w-full p-7">
        <ContactForm />
      </div>

      <Image
        src={"/assets/contact_us.jpg"}
        width={600}
        height={300}
        className="p-8 max-lg:hidden "
        alt="avatar"
      />
    </div>
  );
}
