import React from 'react';
import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-[#0a0e1a] text-white font-sans min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}