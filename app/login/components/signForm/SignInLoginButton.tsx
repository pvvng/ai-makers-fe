"use client";
// custom hook
import useSignInHandler from "@/util/hooks/useSignInHandler";

export default function SignInLoginButton() {
  const { signInhandler } = useSignInHandler();

  return (
    <button
      className="w-1/3 h-[104px] bg-blue-500 text-white rounded"
      onClick={signInhandler}
    >
      로그인
    </button>
  );
}
