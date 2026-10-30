import { useSyncExternalStore } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

function subscribeToMobileQuery(onChange: () => void) {
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getIsMobile() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function getServerIsMobile() {
  return false;
}

export function useIsMobile() {
  return useSyncExternalStore(subscribeToMobileQuery, getIsMobile, getServerIsMobile);
}
