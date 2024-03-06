import { Button } from "@/components/ui/button";
import { CardWithForm } from "../_components/CommunityCard";

import  Link  from "next/link";
export default function Feed(){
    return (
        <div className="flex w-full p-4 gap-10 justify-between max-md:justify-center max-md:flex-col mt-6">
             <div className="max-md:order-1 max-md:flex max-md:w-full max-md:justify-center">
             <span className="text-heading font-bold text-lg ">
           Community
          </span>
          </div>
          <div className="w-full justify-center flex  max-md:order-3">
            <CardWithForm />
            </div>
            <div className="max-md:order-2 max-md:flex max-md:w-full max-md:justify-center">
            <Link href="/NewPost"> 
            <Button className="text-white rounded-xl font-bold py-2 max-md:order-2">
              Start New
            </Button>
          </Link>
          </div>
          


        </div>
        
    )
}