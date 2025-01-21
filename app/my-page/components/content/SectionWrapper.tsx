import { Suspense } from "react";
import ObserverWrapper from "./ScrollObserver/ObserverWrapper";

interface SectionWrapperProps {
  id: string;
  fallback: React.ReactNode;
  children: React.ReactNode;
}

/** 섹션의 원활한 분리를 위한 wrapper 컴포넌트 */
export default function SectionWrapper({
  id,
  fallback,
  children,
}: SectionWrapperProps) {
  return (
    <ObserverWrapper id={id}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ObserverWrapper>
  );
}
