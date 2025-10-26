import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "How to Use the Content",
        answer: "All the content on our site, including tutorials, articles, and resources, is intended for personal learning and skill enhancement. You are free to use it for educational purposes, but any reproduction, redistribution, or use for commercial purposes is strictly prohibited without prior permission."
    },
    {
        question: "Image Usage",
        answer: "Users are not permitted to download images directly from our site; instead, visit Freepik for sourcing, and use Canva for any necessary edits. For more detailed information, we encourage you to check our FAQ section for guidance on image usage and downloads."
    },
];

export default function FaqPage() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-space-grotesk">Frequently Asked Questions</h1>
            </div>
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="text-lg font-semibold font-space-grotesk">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
