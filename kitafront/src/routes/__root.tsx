import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import appCss from "../styles.css?url";
import Footer from "@/components/Footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "KitaFront - Web Design & Development",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/KFLogo.png",
        type: "image/png",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#074C97]">
        <Header />
        {children}
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}
