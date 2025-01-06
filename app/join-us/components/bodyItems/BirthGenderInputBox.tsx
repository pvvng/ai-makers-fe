export default function BirthGenderInputBox() {
  return (
    <div className="flex w-full justify-center items-center mt-2 gap-2">
      <BrithInput />
      <GenderSelect />
    </div>
  );
}

function BrithInput() {
  return (
    <input
      className="border h-12 p-2 w-3/5"
      type="text"
      placeholder="생년월일 (예시. 20021221)"
      maxLength={6}
      required
      name="birth"
    />
  );
}

function GenderSelect() {
  return (
    <div className="w-2/5">
      <select
        className="border h-12 w-full p-2"
        required
        defaultValue=""
        name="gender"
      >
        <option value="" disabled>
          성별
        </option>
        <option value="man">남성</option>
        <option value="female">여성</option>
      </select>
    </div>
  );
}
