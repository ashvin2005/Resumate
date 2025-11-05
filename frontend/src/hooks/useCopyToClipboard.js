// hooks/useCopyToClipboard.js
import { useState, useCallback } from "react";
import { useToast } from "../context/ToastContext";

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);
  const { showToast } = useToast();

  const copyToClipboard = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        showToast("Copied to clipboard!", "success");
        return true;
      } catch (error) {
        console.error("Failed to copy:", error);
        showToast("Failed to copy to clipboard", "error");
        return false;
      }
    },
    [showToast]
  );

  return { copiedText, copyToClipboard };
};
