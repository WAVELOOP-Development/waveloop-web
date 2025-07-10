import { Navbar1 } from "../components/navbar1";
import Footer from "../components/sections/footer";
import ScrollToTop from "../components/scroll-to-top";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <main className="bg-[#000511]">
      <Navbar1 />
      {children}
      <Footer />
      <ScrollToTop />
    </main>
  );
}
