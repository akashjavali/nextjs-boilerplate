"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

/**
 * Out side click lister hook
 */
function useOnClickOutside(ref: any, handler: any) {
  React.useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

/**
 * Debounce to delay to update value
 */
function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const setTimer = setTimeout(() => setDebounceValue(value), delay || 500);
    return () => {
      clearTimeout(setTimer);
    };
  }, [value, delay]);
  return debounceValue;
}

/**
 * Infinity scroll custom hook
 */
type UseInfinityScrollProps = {
  isLoading: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingPreviousPage: boolean;
  fetchPreviousPage: () => void;
  hasPreviousPage: boolean | undefined;
};

function useInfinityScroll({
  isLoading,
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
  isFetchingPreviousPage,
  fetchPreviousPage,
  hasPreviousPage,
}: UseInfinityScrollProps) {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading || isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  const firstElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading || isFetchingPreviousPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasPreviousPage) {
          fetchPreviousPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [
      isLoading,
      isFetchingPreviousPage,
      hasPreviousPage,
      fetchPreviousPage,
    ]
  );

  return { lastElementRef, firstElementRef };
}

export { useOnClickOutside, useDebounce, useInfinityScroll };
