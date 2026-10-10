export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="main">{children}</main>;
}
