import { NavigationMenuDemo } from "../components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#000511]">
      <div className="absolute z-10 flex justify-center w-full items-center top-8 left-0 right-0">
        <NavigationMenuDemo />
      </div>
      {children}
    </main>
  );
}
