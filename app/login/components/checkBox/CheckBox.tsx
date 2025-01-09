"use client";
// constant
import { REMEMBER_ID } from "@/constants/signInCheckBox";
// store
import useCheckboxStore from "@/store/useCheckBoxStore";
// type
import { checkBox } from "@/types/signInCheckBox";

export default function CheckBox({ id }: { id: checkBox }) {
  const { checkedStates, toggleChecked } = useCheckboxStore();

  const labelText = id === REMEMBER_ID ? "아이디 기억하기" : "오토 로그인";

  return (
    <div>
      <input
        id={id}
        className="mt-5"
        type="checkbox"
        checked={checkedStates[id]}
        onChange={() => toggleChecked(id)}
      />
      <label htmlFor={id}> {labelText}</label>
    </div>
  );
}
