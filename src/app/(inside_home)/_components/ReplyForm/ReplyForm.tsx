
import CommentForm from "./CommentForm";
import { CommentData } from "@/data/CommunityfakeData";
import Image from "next/image";
const ReplyForm = () => {
  return (
    <>
      {CommentData.map((comment) => (
        <div key={comment.id} className="flex items-center space-x-4 max-sm:space-x-0 max-sm:gap-3">
            <div className="py-2">
            <Image src={comment.avatar} width={50} height={50} className="rounded-full" alt="avatar"/>
            </div>
          

          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-base text-heading ">{comment.userName}</p>
              <p className=" text-primary text-xs ">{comment.time}</p>
            </div>
            <div>
              <p className="text-xs text-subheading">{comment.description}</p>
            </div>
          </div>
        </div>
      ))}
      <CommentForm /> 
    </>
  );
};

export default ReplyForm;