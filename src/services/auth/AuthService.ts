'use server';

import HTTPClient from "@/libs/HTTPClient";
import { SessionData } from "@/libs/session/iron";
import { setSession } from "@/libs/session/manager";
import { ApiClient, isResultError } from "@/libs/Utils";
import AgentSession from "@/libs/types/models/AgentSession";

// Variables
const baseEndpoint = "/auth";

const InterceptSession = 
  (method: any): (body: any) => Promise<[SessionData | null, number, string | null]> =>
    async (body: any) => {
      const result = await method(body);
      if (isResultError(result)) return result;
      return [await setSession(result[0], true), result[1], result[2]];
    };

/**
 * Endpoint for registering.
 *
 * @param body The JSON object containing the token, username and password.
 * @return Response containing the account information or an error message.
 */
export const Register = InterceptSession(async (
  data: { token: string, username: string, password: string },
  client: HTTPClient = ApiClient
): Promise<[AgentSession | null, number, string | null]> =>
  await client.PostAsync<AgentSession>(`${baseEndpoint}/register`, data)
);

/**
 * Endpoint for handling login requests.
 *
 * @param body The JSON object containing the username and password for login.
 * @return Response containing the account information or an error message.
 */
export const Login = InterceptSession(async (
  data: { username: string, password: string },
  client: HTTPClient = ApiClient
): Promise<[AgentSession | null, number, string | null]> =>
  await client.GetAsync<AgentSession>(`${baseEndpoint}/login`, data)
);

/**
 * Endpoint for handling login requests.
 *
 * @param body The JSON object containing the sessionId.
 * @return Response containing the account information or an error message.
 */
export const Logout = InterceptSession(async (
  data: { sessionId: string },
  client: HTTPClient = ApiClient
): Promise<[AgentSession | null, number, string | null]> =>
  await client.DeleteAsync(`${baseEndpoint}/logout`, data)
);

/**
 * Endpoint for requesting reset of the password when forgotten
 *
 * @param body The JSON object containing the email of the user.
 * @return Response containing the updated account information or an error message.
 */
export const RequestReset = InterceptSession(async (
  data: { email: string },
  client: HTTPClient = ApiClient
): Promise<[AgentSession | null, number, string | null]> =>
  await client.PostAsync(`${baseEndpoint}/password`, data)
);

/**
 * Endpoint for resetting the password when forgotten
 *
 * @param body The JSON object containing the password and token.
 * @return Response containing the updated account information or an error message.
 */
export const ResetPassword = InterceptSession(async (
  data: { token: string, newPassword: string },
  client: HTTPClient = ApiClient
): Promise<[AgentSession | null, number, string | null]> =>
  await client.PutAsync(`${baseEndpoint}/password`, data)
);

/**
 * Endpoint for updating password.
 *
 * @param body The JSON object containing username, current password and new.
 * @return Response containing the updated account information or an error message.
 */
export const UpdatePassword = async (
  data: { username: string, password: string, newPassword: string },
  client: HTTPClient = ApiClient
) => await client.PatchAsync(`${baseEndpoint}/password`, data);