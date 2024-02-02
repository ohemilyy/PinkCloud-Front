import { defaultSession } from "@/libs/session/iron";
import { getSession } from "@/libs/session/manager";
import { Logout } from "@/services/auth/AuthService";

// read session
export async function GET() {
  const session = await getSession();

  if (!session.isLoggedIn)
    return Response.json(defaultSession);
  return Response.json(session);
}

// logout
export async function DELETE() {
  const session = await getSession();

  await Logout(session.sessionId);

  session.destroy();
  
  return Response.json(defaultSession);
}