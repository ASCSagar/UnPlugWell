export default function Disclaimer() {
  return (
    <main className="py-12 min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-12">
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Disclaimer
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              The information provided on this website is for general
              informational purposes only.
            </p>
          </div>
          <div className="max-w-8xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  1. Accuracy of Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  While we strive to provide accurate and up-to-date content, we
                  make no warranties about the completeness, reliability, or
                  accuracy of any information on this site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  2. External Links
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Our website may contain links to third-party sites. We do not
                  endorse or take responsibility for the content and practices
                  of these external sites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  3. Professional Advice
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  The content provided is not a substitute for professional
                  advice. Always seek expert opinions before making any
                  decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  4. Limitation of Liability
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  We are not liable for any losses or damages incurred from the
                  use of this website.
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
