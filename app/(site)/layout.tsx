import { fontSans } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils"
import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/disable-draftmode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Template from "./template"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", fontSans.variable)}>
      <body className="min-h-screen bg-background antialiased">
        <Template>
          {children}
          <SanityLive />
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
        </Template>
      </body>
    </html>
  );
}
