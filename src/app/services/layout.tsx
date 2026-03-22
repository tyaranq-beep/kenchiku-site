import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業内容 | MONOLITH & SILK",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
