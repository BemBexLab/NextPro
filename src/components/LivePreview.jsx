"use client";
import { useState } from "react";

export default function LivePreview({ url }) {
  const [iframeError, setIframeError] = useState(false);

  return (
    <>
      {!iframeError ? (
        <iframe
          src={url}
          className="w-full"
          style={{
            minHeight: 1000,
            borderRadius: 16,
            border: "1px solid #e5e7eb",
            background: "#e5e7eb",
            marginBottom: 0,
          }}
          allow="fullscreen"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
          onError={() => setIframeError(true)}
        />
      ) : (
        <div className="p-8 bg-gray-100 text-gray-700 rounded-xl text-center min-h-[300px] flex flex-col items-center justify-center">
          <span className="text-4xl mb-4">⚠️</span>
          <div>
            Live preview unavailable.<br />
            This website blocks embedding in iframes.
          </div>
        </div>
      )}
    </>
  );
}
