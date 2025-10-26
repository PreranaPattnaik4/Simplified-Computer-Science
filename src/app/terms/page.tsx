export default function TermsPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 prose lg:prose-xl">
            <h1 className="text-4xl font-bold font-space-grotesk">Terms and Conditions</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2>1. Introduction</h2>
            <p>
                Welcome to Simplified Computer Science ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at [website.com] (together or individually "Service") operated by Simplified Computer Science.
            </p>

            <h2>2. Accounts</h2>
            <p>
                When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on our Service.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Simplified Computer Science and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>

            <h2>4. Links To Other Web Sites</h2>
            <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by Simplified Computer Science.
            </p>

            <h2>5. Termination</h2>
            <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>

            <h2>6. Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>

            <h2>7. Changes</h2>
            <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2>8. Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us.
            </p>
        </div>
    )
}
