"use client";

import { useMyPageScrollStore } from "@/store/useMyPageScrollStore";
import { useEffect } from "react";

/** scroll 기능시 좀 더 제대로 된 위치에서 ref 관측하기 위해서 사용하는 컴포넌트 */
export default function ScrollWatcher() {
  const sections = useMyPageScrollStore((state) => state.sections);
  const setActiveSection = useMyPageScrollStore(
    (state) => state.setActiveSection
  );

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      let closestTop = Number.POSITIVE_INFINITY;

      Object.entries(sections).forEach(([label, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < closestTop) {
            closestTop = rect.top;
            closestSection = label;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections, setActiveSection]);

  return null;
}
