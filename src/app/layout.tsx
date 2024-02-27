import "@/styles/globals.css";

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
      <body className="min-h-screen max-w-screen-2xl mx-auto w-full">
        {children}
      </body>
    </html>
  );
}
