import type { Metadata } from "next";
import { fontSans } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils"
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"
import Template from "./template"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", fontSans.variable)}>
      <body className="min-h-screen bg-background antialiased">
        {draftMode().isEnabled && (
          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
        )}
        <Template>
          {children}
        </Template>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
