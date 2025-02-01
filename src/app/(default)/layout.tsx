import MobileNavbar from "@/components/Navbar/MobileNavbar/MobileNavbar";
import Navbar from "@/components/Navbar/Navbar";
import SubNav from "@/components/Navbar/SubNav/SubNav";
import "../globals.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="relative h-full antialiased">
        <main className="relative flex min-h-screen flex-col">
          <div className="fixed top-0 z-50 w-full bg-white shadow-md backdrop-blur-[12px]">
            <Navbar />
            <SubNav />
            <MobileNavbar />
          </div>

          <div className="mt-[90px] flex-1 flex-grow md:mt-[127px]">
            {children}
          </div>
          {/* <Footer /> */}
          <div className="border-2">Footer</div>
        </main>
      </div>
    </section>
  );
}
