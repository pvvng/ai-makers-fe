import { languageOptions } from "@/constants";
import SelectorButton from "./SelectorButton";

export default function LanguageSelector() {
  return languageOptions.map((option) => (
    <LanguageCheckbox key={option} language={option} />
  ));
}

function LanguageCheckbox({ language }: { language: string }) {
  return (
    <div className="sm:w-1/5 md:w-1/3 w-1/2 px-1 pt-1 text-center truncate">
      <SelectorButton text={language} type="language" />
    </div>
  );
}
