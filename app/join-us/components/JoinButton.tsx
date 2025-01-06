'use client';

import { joinFormHandler } from "@/util/function/fetch/joinFormHandler";

export default function JoinButton() {

  return (
    <div className="text-end mt-3 mb-3 w-full">
      <button
        className="w-full h-10 border border-blue-500 p-2 bg-blue-500 text-white"
        type="submit"
        onClick={joinFormHandler}
      >
        가입하기
      </button>
    </div>
  );
}
