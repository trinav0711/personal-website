"use client";

import { useEffect } from "react";

export default function DisableActions() {
  useEffect(() => {
    const contextMenuHandler = (e: MouseEvent) => {
      e.preventDefault();
    };

    const keydownHandler = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;
      const blockedKeys = ["p", "s"];

      if (isCmdOrCtrl && blockedKeys.includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", contextMenuHandler);
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("contextmenu", contextMenuHandler);
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return null;
}