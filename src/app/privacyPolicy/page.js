export default function PrivacyPolicy() {
  return (
    <main className="py-12 min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-12">
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Your privacy is important to us. This Privacy Policy explains how
              we handle your personal information.
            </p>
          </div>
          <div className="max-w-8xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  1. Information We Collect
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  We collect personal information you provide, such as your
                  name, email, and any data submitted via forms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Your data is used to improve your experience, provide
                  services, and ensure security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  3. Cookies and Tracking
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  We use cookies to enhance your browsing experience. You can
                  adjust your settings anytime.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  4. Third-Party Services
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  We may use third-party tools to improve our website, which
                  might collect anonymous data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  5. Your Rights
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  You have the right to request access, correction, or deletion
                  of your data at any time.
                </p>
              </section>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-6">
              For any questions, contact us at{" "}
              <a
                href="mailto:support@unplugwell.com"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                support@unplugwell.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
