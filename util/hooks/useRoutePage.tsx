import { useRouter } from "next/navigation";

export default function useRoutePage() {
  const router = useRouter();

  const routePage = (route: string) => {
    router.push(route);
  };

  return routePage;
}
