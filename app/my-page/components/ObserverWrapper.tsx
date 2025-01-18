"use client";
// store
import { useMyPageScrollStore } from "@/store/useMyPageScrollStore";
// react
import { ReactNode, useEffect, useRef } from "react";

/** observer를 사용하기 위한 wrapper 컴포넌트 */
export default function ObserverWrapper({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const setSectionRef = useMyPageScrollStore((state) => state.setSectionRef);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionRef(id, sectionRef);
    }
    return () => {
      setSectionRef(id, sectionRef);
    };
  }, [id, setSectionRef]);

  return (
    <div ref={sectionRef} id={id} data-id={id}>
      {children}
    </div>
  );
}
