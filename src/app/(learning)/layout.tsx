import { SideBar, TopMenu } from "@/components";

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen relative">
      <div className="absolute top-0 w-full z-10 pointer-events-auto">
        <TopMenu />
        <SideBar />
      </div>
      <div className="absolute top-[0rem] w-full z-0 pointer-events-auto">
        {children}
      </div>
    </main>
  );
}
