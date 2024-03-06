import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
   
      <div className="flex max-sm:flex-col items-center border-b-2 border-[#3BC8C0] p-5  w-full justify-between">
        <Image src={"/assets/logo.svg"} alt="logo" width={100} height={100} />
        <Avatar className="h-16 w-16">
          <AvatarImage src={"/assets/dummy_image.png"} alt="@shadcn" />
        </Avatar>
      
      </div>
      
        
    
  );
};

export default Header;
