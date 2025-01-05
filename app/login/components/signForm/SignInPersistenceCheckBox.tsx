export default function SignInPersistenceCheckBox() {
  return (
    <div className="text-end">
      <input id="persistence" className="mt-5" type="checkbox" />
      <label htmlFor="persistence"> 로그인 유지</label>
    </div>
  );
}
