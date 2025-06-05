"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-block border-primary bg-primary text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-solid transition-colors duration-300  font-medium px-6 py-3 rounded-full"
    >
      ← Back to Portfolio
    </button>
  );
}
