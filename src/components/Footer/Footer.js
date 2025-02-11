import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/aboutUs" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "" },
    { name: "Press", href: "" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Newsletter", href: "" },
    { name: "Events", href: "" },
    { name: "Help Center", href: "" },
  ],
  legal: [
    { name: "Privacy Policy", href: "" },
    { name: "Terms of Service", href: "" },
    { name: "Cookie Policy", href: "" },
    { name: "Disclaimer", href: "" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/unplugwell" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/unplugwell" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/unplugwell",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/unplugwell",
  },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/unplugwell" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Unplugwell
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering mindful technology use for a balanced digital
              lifestyle.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-400 text-sm">
            © {currentYear} Unplugwell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
