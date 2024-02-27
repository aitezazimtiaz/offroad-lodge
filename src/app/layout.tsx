import "@/styles/globals.css";
import localFont from "next/font/local";

const Segoe = localFont({
  src: [
    {
      path: "../../public/fonts/SegoeUI.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SegoeUIItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/SegoeUIBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/SegoeUIBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "OFFROAD LODGE",
  icons: [{ rel: "icon", url: "/assets/logo.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Segoe.className}>{children}</body>
    </html>
  );
}

// className="min-h-screen max-w-screen-2xl mx-auto w-full"
