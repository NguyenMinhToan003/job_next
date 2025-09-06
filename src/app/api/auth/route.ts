import { LoginResponseType } from "@/schemaValidations/auth.schema";

export async function POST(request: Request) {
  const body = await request.json() as LoginResponseType;
  return Response.json(
      {
        accessToken: body.accessToken,
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `access_token=${body.accessToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`, // 1 hour
        }
      }
    )
  }