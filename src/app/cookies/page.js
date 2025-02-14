export default function CookiesPolicy() {
  return (
    <main className="py-12 min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-12">
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Cookies Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              This website uses cookies to enhance user experience and analyze
              website traffic.
            </p>
          </div>
          <div className="max-w-8xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  1. What Are Cookies?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Cookies are small text files stored on your device to enhance
                  your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  2. How We Use Cookies
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  We use cookies to personalize content, analyze site traffic,
                  and improve our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  3. Managing Cookies
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  You can control and delete cookies through your browser
                  settings. Disabling cookies may affect site functionality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  4. Third-Party Cookies
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Some cookies are set by third-party services we use, such as
                  analytics and advertising tools.
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
