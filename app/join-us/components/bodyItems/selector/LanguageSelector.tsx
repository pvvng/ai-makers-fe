import { languageOptions } from "@/constants/options";
import SelectorButton from "./SelectorButton";

export default function LanguageSelector() {
  return languageOptions.map((option) => (
    <LanguageCheckbox key={option} language={option} />
  ));
}

function LanguageCheckbox({ language }: { language: string }) {
  return (
    <div className="w-1/3 px-1 pt-1 text-center truncate">
      <SelectorButton text={language} type="language" />
    </div>
  );
}
