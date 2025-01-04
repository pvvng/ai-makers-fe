import { languageOptions } from "@/constants";

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
    <div className="sm:w-1/5 md:w-1/3 w-1/2 px-1 pt-1">
      <div className="w-full text-center truncate">
        <input id={language} type="checkbox" className="hidden peer" />
        <label
          htmlFor={language}
          className="w-full lg:h-18 md:h-16 sm:h-14 h-12 border cursor-pointer 
          peer-checked:bg-blue-500 peer-checked:text-white 
          flex items-center justify-center transition"
        >
          {language}
        </label>
      </div>
    </div>
  );
}
