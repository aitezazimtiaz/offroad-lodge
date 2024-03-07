import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <>
      <div className="flex flex-col w-full p-8 gap-10  max-md:w-full">
        <p className="text-heading text-2xl font-bold">
          Frequently Ask Questions
        </p>
        <Accordion type="single" collapsible className="w-full max-md:w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-heading  font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </AccordionTrigger>
            <AccordionContent className="text-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pellentesque, turpis vel tempor vehicula, tellus elit gravida
              massa, sit amet imperdiet nulla lorem non ligula.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-heading font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </AccordionTrigger>
            <AccordionContent className="text-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pellentesque, turpis vel tempor vehicula, tellus elit gravida
              massa, sit amet imperdiet nulla lorem non ligula.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-heading font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </AccordionTrigger>
            <AccordionContent className="text-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pellentesque, turpis vel tempor vehicula, tellus elit gravida
              massa, sit amet imperdiet nulla lorem non ligula.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-heading font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </AccordionTrigger>
            <AccordionContent className="text-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pellentesque, turpis vel tempor vehicula, tellus elit gravida
              massa, sit amet imperdiet nulla lorem non ligula.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
