"use client";

import { useState } from "react";
import IdValidateField from "../validateField/IdValidateField";
import IdInput from "./IdInput";

export default function IdInputBox() {
  const [id, setId] = useState("");

  return (
    <div id="id-input">
      <IdInput setId={setId} />
      <IdValidateField id={id} />
    </div>
  );
}
