import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-semibold text-brand">۴۰۴</p>
      <h1 className="font-display mt-2 text-4xl text-navy">صفحه پیدا نشد</h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        نشانی واردشده در سایت پرشیا دنا سان وجود ندارد. از صفحه اصلی یا کاتالوگ محصولات ادامه دهید.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn btn-brand">
          صفحه اصلی
        </Link>
        <Link href="/products/" className="btn btn-line">
          محصولات
        </Link>
      </div>
    </main>
  );
}
