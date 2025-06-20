import '../app/globals.css';
import Navbar from '../components/pilex/Navbar';
import ContactCTA from '../components/pilex/ContactCTA';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0e1a] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
          {children}
        </main>
        <ContactCTA />
      </body>
    </html>
  );
}
