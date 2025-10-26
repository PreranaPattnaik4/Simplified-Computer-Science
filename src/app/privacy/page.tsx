export default function PrivacyPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 prose lg:prose-xl">
            <h1 className="text-4xl font-bold font-space-grotesk">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2>1. Introduction</h2>
            <p>
                Simplified Computer Science ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Simplified Computer Science.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
                We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support, or otherwise communicate with us.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
                We use the information we collect to provide, maintain, and improve our services, such as to administer your account and to process your transactions.
            </p>

            <h2>4. Sharing of Information</h2>
            <p>
                We may share information about you as follows or as otherwise described in this Privacy Policy:
                <ul>
                    <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf;</li>
                    <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process;</li>
                </ul>
            </p>

            <h2>5. Your Choices</h2>
            <p>
                You may update, correct or delete information about you at any time by logging into your online account or emailing us at [email].
            </p>
            
            <h2>6. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at: [email].
            </p>
        </div>
    )
}
