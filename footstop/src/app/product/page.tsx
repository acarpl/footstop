'use client';
import { useSearchParams } from 'next/navigation';

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div>
      <h1>Detail Produk</h1>
      <p>ID Produk: {id}</p>
    </div>
  );
}
