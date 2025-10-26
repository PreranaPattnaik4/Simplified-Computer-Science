export default function DisclaimerPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 prose lg:prose-xl">
            <h1 className="text-4xl font-bold font-space-grotesk">Disclaimer</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <p>
                The information provided by Simplified Computer Science (“we,” “us” or “our”) on [website.com] (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
            </p>

            <h2>External Links Disclaimer</h2>
            <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
            </p>

            <h2>Professional Disclaimer</h2>
            <p>
                The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
            </p>
            
            <h2>Testimonials Disclaimer</h2>
            <p>
                The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services.
            </p>
        </div>
    )
}
