export default function TermsAndConditions() {
  return (
    <main className="py-12 min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-12">
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Welcome to Unplugwell! By accessing our website, you agree to
              comply with the following terms and conditions.
            </p>
          </div>
          <div className="max-w-8xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  By using this website, you agree to these terms. If you do not
                  agree, please do not use our site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  2. User Responsibilities
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  You agree not to use the site for any unlawful activities and
                  to comply with all applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  3. Intellectual Property
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  All content on this website, including text, graphics, and
                  logos, is the property of Unplugwell and may not be used
                  without permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  4. Limitation of Liability
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  We are not responsible for any damages resulting from the use
                  of this site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  5. Changes to Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  We may update these terms from time to time. Continued use of
                  the site means you accept any changes.
                </p>
              </section>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-6">
              If you have any questions, please contact us at{" "}
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
