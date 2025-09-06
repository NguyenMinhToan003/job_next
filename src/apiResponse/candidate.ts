import { cookies } from "next/headers";
import { http } from "@/lib/http";

export const candidateAPI = {
  me: async () => {
    const cookieStore = cookies(); // ✅ không cần await
    const accessToken = cookieStore.get("access_token")?.value;

    return http.get("/candidate/me", {
      headers: {
        Authorization: `Bearer ${accessToken || ""}`,
      },
    });
  },
};
