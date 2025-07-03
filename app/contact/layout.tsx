import { Navbar1 } from "../components/navbar1";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white">
      <Navbar1 />
      {children}
    </main>
  );
}
