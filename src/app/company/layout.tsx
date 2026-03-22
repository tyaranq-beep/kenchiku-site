import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | MONOLITH & SILK",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
