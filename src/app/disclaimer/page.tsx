export default function DisclaimerPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 prose lg:prose-xl">
            <h1 className="text-4xl font-bold font-space-grotesk">Disclaimer</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2>Use with Caution, but Trust in Our Content</h2>
            <p>
                At Simplified Computer Science, we take pride in providing high-quality, well-researched content to help you enhance your skills. While we strive for accuracy and reliability, it's important to remember that applying the information we provide is ultimately your choice and responsibility. This means that how you use the content, including the decisions you make based on it, is up to you. We encourage users to cross-check any critical information, especially if it involves personal, technical, or professional matters. Although we are confident in the content we share, we cannot be held accountable for any unintended consequences from its use, as individual circumstances and outcomes may vary.
            </p>

            <h2>Image Usage</h2>
            <p>
                Users are not permitted to download images directly from our site; instead, visit Freepik for sourcing, and use Canva for any necessary edits. For more detailed information, we encourage you to check our FAQ section for guidance on image usage and downloads.
            </p>

            <h2>Image Credits</h2>
            <p>
                We use images from reputable sources like Freepik and Canva to enhance the visual appeal of our content. While we are pro users of Canva and edit all images there, we do not own the images from Canva. Proper credits for Freepik images can be found at Freepik and for Canva at Canva. And plz check out our disclaimer and credit sections . CHECK OUT THESE TWO WEBSITES click here Freepik <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">https://www.freepik.com/</a> Canva <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">https://www.canva.com/</a>
            </p>
            
            <h2>Our Content Creation Process</h2>
            <p>
                All our content is crafted with the help of cutting-edge AI tools like ChatGPT and Gemini. This ensures that our articles, tutorials, and guides are not only accurate and informative but also engaging and easy to understand.
            </p>
        </div>
    )
}
