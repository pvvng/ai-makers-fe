import { languageOptions } from "@/constants";
import SelectorButton from "./SelectorButton";

export default function LanguageSelector() {
  return (
    <div id="language-select" className="w-full">
      <h6 className="mt-5">사용 가능 언어</h6>
      <div className="flex flex-wrap w-full mt-2">
        {languageOptions.map((option) => (
          <LanguageCheckbox key={option} language={option} />
        ))}
      </div>
    </div>
  );
}

function LanguageCheckbox({ language }: { language: string }) {
  return (
    <div className="sm:w-1/5 md:w-1/3 w-1/2 px-1 pt-1 text-center truncate">
      <SelectorButton text={language} />
    </div>
  );
}
