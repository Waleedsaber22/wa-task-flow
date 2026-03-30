import { useEffect, useRef } from "react";

export default function useInfiniteScroll({
  hasNextPage,
  fetchNextPage,
  threshold = 50,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const isNearBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;

      if (isNearBottom && hasNextPage) {
        fetchNextPage();
      }
    };

    el.addEventListener("scroll", onScroll);

    return () => {
      el.removeEventListener("scroll", onScroll);
    };
  }, [hasNextPage, fetchNextPage, threshold]);

  return containerRef;
}
