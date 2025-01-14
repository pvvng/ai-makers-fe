"use client";
// custom hook
import useIDLocalStorage from "@/util/hooks/useIDLocalStorage";
// store
import useCheckboxStore from "@/store/useCheckBoxStore";
// react
import { useEffect, useState } from "react";
// constants
import { REMEMBER_ID } from "@/constants/signInCheckBox";

export default function SignInIdInput() {
  const { getRememberedId } = useIDLocalStorage();
  const { setChecked } = useCheckboxStore();

  const [rememberedIdState, setRememberedIdState] = useState("");

  useEffect(() => {
    const rememberedId = getRememberedId();
    if (rememberedId) {
      setRememberedIdState(rememberedId);
      setChecked(REMEMBER_ID, true);
    }
  }, []);

  return (
    <input
      type="text"
      name="id"
      value={rememberedIdState}
      onChange={(e) => setRememberedIdState(e.target.value)}
      className="w-full h-12 p-2 border rounded"
      placeholder="아이디"
    />
  );
}
