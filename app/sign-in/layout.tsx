import CenterLayout from "@/components/layout/center-page";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CenterLayout>{children}</CenterLayout>;
}
