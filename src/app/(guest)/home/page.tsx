import envConfig from "@/config"
import { http } from "@/lib/http";
import { cookies } from "next/headers"

export default async function HomePage() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access_token');
  await fetch(`${envConfig().NEXT_PUBLIC_API_ENDPOINT}/packages/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken?.value}`,
    },
  }).then(res => res.json())
  const text = await http.get(`${envConfig().NEXT_PUBLIC_API_ENDPOINT}/packages/all`, {
    headers: {
      'Authorization': `Bearer ${accessToken?.value}`,
    },
  });
  console.log('Packages:', text);
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  )
}