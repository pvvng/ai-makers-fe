import { API_URL } from "@/constants/url";

export default async function fetchLogin() {
  const loginResponse = await fetch(`${API_URL}/login`, {cache: "force-cache"});
  
  const loginData = await loginResponse.json();

  return loginData;
}