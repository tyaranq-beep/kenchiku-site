import { Metadata } from "next";
import { mockWorks } from "@/lib/mockData";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const workId = parseInt(params.id, 10);
  const work = mockWorks.find(w => w.id === workId) || mockWorks[0];
  return {
    title: `${work.title} | MONOLITH & SILK`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
