import type { ReactNode } from "react";
import "../globals.css"; // Adjust path if needed
 
export const metadata = {
  title: "My Home Page",
  description: "This is the /myhome page layout",
};
 
export default function MyHomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen">
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}