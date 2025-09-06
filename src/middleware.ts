import { NextRequest, NextResponse } from "next/server";

const privateRoute = ["/home"];
const publicRoute = ["/auth/login"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;
  console.log({ pathname, accessToken });
  if (privateRoute.includes(pathname) && !accessToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (publicRoute.includes(pathname) && accessToken) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

// ❌ Không được: matcher: [...privateRoute, ...publicRoute]
// ✅ Phải viết cứng:
export const config = {
  matcher: ["/home", "/auth/login"],
};
