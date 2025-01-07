import { FormValues } from "@/types/form";

const REDIRECT_PAGE = "/login";

export default async function fetchJoinUs(formValues: FormValues) {
  const postValue = getJoinUsPostValue(formValues);

  const joinFetchJson = await fetch("/api/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...postValue }),
  });

  const joinFetchResult = await joinFetchJson.json();

  alert(joinFetchResult.message);

  window.location.href = REDIRECT_PAGE;
}

function getJoinUsPostValue(formValues: FormValues) {
  const postValue: { [key: string]: string } = {};

  formValues.forEach((value) => {
    postValue[value.name] = value.value;
  });

  return postValue;
}
