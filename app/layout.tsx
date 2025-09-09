import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The M&A Global Platform | Secure M&A DealRoom App",
  description: "Access confidential business listings, manage due diligence, and communicate securely with the M&A Global Platform. Download our app for qualified buyers and sellers.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Floating contact links sourced from public env vars
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#w"; // e.g. https://wa.me/15551234567
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#i"; // e.g. https://instagram.com/yourhandle
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@example.com"; // e.g. contact@domain.com

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased relative min-h-screen bg-neutral-900`}
      >
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>

        {/* Floating Contact Buttons */}
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
          {/* WhatsApp */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/60 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.5)] ring-1 ring-black/40 hover:from-neutral-700 hover:to-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_-4px_rgba(0,0,0,0.6)]"
          >
            {/* Placeholder icon slot */}
<svg width="151px" height="151px" viewBox="-9.12 -9.12 42.24 42.24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#20c200"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#20c200"></path> </g></svg>
            {/* <span className="w-5 h-5 rounded-sm bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-90 group-hover:opacity-100 transition" />
            <span className="absolute -left-2 -top-2 h-2 w-2 rounded-full bg-yellow-500/70 animate-pulse" /> */}
            <span className="sr-only">WhatsApp</span>
          </a>
          {/* Instagram */}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/60 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.5)] ring-1 ring-black/40 hover:from-neutral-700 hover:to-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_-4px_rgba(0,0,0,0.6)]"
          >
            <svg viewBox="-9.84 -9.84 43.68 43.68" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#c61541"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#c61541"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#c61541"></path> </g></svg>
            {/* <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600 opacity-90 group-hover:opacity-100 transition" /> */}
            <span className="sr-only">Instagram</span>
          </a>
          {/* Email */}
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/60 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.5)] ring-1 ring-black/40 hover:from-neutral-700 hover:to-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_-4px_rgba(0,0,0,0.6)]"
            >
<svg viewBox="-10.8 -10.8 45.60 45.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" stroke="#efc806" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              {/* <span className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rotate-45 rounded-[4px] opacity-90 group-hover:opacity-100 transition" /> */}
              <span className="sr-only">Email</span>
            </a>
        </div>
      </body>
    </html>
  );
}
