import { Navbar1 } from "../components/navbar1";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#000511]">
      <Navbar1 />
      {children}
    </main>
  );
}
