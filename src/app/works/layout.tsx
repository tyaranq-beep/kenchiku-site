import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "施工実績 | MONOLITH & SILK",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
