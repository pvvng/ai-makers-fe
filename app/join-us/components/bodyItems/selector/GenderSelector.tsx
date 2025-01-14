export default function GenderSelector() {
  return (
    <div className="w-2/5">
      <select
        className="border h-12 w-full p-2 shadow"
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
