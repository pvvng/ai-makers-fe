'use client';

export default function SignInPersistenceCheckBox() {
  return (
    <div>
      <input id="persistence" className="mt-5" type="checkbox" />
      <label htmlFor="persistence"> 로그인 유지</label>
    </div>
  );
}
