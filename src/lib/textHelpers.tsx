// src/lib/textHelpers.tsx
import React from "react";

export function highlightEV(text: any) {
  if (!text || typeof text !== "string") return text;

  const parts = text.split(/(EV)/i);

  return parts.map((part, index) =>
    part.toLowerCase() === "ev" ? (
      <span key={index} style={{ color: "#03BF2A" }}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}
