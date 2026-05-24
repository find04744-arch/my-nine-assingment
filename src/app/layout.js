import "./globals.css"; // অথবা তোমার গ্লোবাল সিএসএস পাথ
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
// যদি কোনো AuthProvider বা Context থাকে, সেটাকেও এখানে র‍্যাপ (Wrap) করবে

export const metadata = {
  title: "DocAppoint - Doctor Appointment Manager",
  description: "Book your doctor appointments easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen flex flex-col justify-between">
        {/* নেভবার এখানে দিলে সব পেজে মাস্ট শো করবে */}
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}