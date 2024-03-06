import BackButton from "@/components/ui/BackButton";


import PostForm from "./PostForm/PostForm";

export default function NewPost() {
  return (
    <>
   
   <div className="flex flex-col w-full p-8 gap-10">
        <div className="flex flex-col  gap-4">
          <BackButton />
          <div className="w-full justify-center flex">
          <div className="flex  w-3/4 max-sm:w-full"> 
            <PostForm />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
