// src/hooks/useAnimeInView.js
import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

/**
 * useAnimeInView
 * - Attach the returned ref to a wrapper element.
 * - When it scrolls into view, Anime.js animation runs.
 *
 * options: {
 *   animation: (el) => void,  // anime() call
 *   threshold?: number,       // IntersectionObserver threshold
 *   once?: boolean            // run only once (default true)
 * }
 */
export function useAnimeInView(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { animation, threshold = 0.2, once = true } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typeof animation === "function") {
            animation(el);
            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options.animation, options.threshold, options.once]);

  return ref;
}
