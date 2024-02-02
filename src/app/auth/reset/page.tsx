'use client';
import useSession from "@/hooks/useSession";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import HashLink from "@/components/HashLink";
import { isResultError } from "@/libs/Utils";
import { RequestReset } from "@/services/auth/AuthService";
import { FaDiscord } from "react-icons/fa6";

export default function Page() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username') ?? undefined;
  const token = searchParams.get('token');
  return token ? <ResetPasswordComponent username={username} token={token}/> : <RequestResetComponent username={username}/>;
};

const RequestResetComponent = ({ username: username }: { username?: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<string | null>(null);

  const isError = useRef<boolean>(false);

  async function onSubmitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    
    isError.current = false;
    setState(null);
 
    try {
      const formData = new FormData(event.currentTarget);
      
      const res = await RequestReset({ email: formData.get("email")?.toString() });
      if (isResultError(res, true))
        throw new Error(res[2] ?? undefined);

      isError.current = false;
      setState("An email has been sent to reset your password");
    } catch (state: any) {
      isError.current = true;
      setState(state.message);
    } finally {
      setIsLoading(false);
    }
  }

  return <>
    <h3 className="text-primary">
      It's okay.<br/>
    </h3>
    <h5 className="mb-4 mx-8 text-primary text-center">
      Everyone forgets their password.<br/>We can help.
    </h5>
    {state && <p className={`${(isError.current ? 'text-error' : 'text-success')} mb-1`}>{state}</p>}
    <form className="w-[75%]" onSubmit={onSubmitRequest}>
      <input className="py-2 px-4 min-h-fit h-fit w-full overflow-hidden rounded-lg mb-2"
        disabled={isLoading} type="text" name="email" placeholder="Email" required/>
      <button className="btn btn-secondary py-2 px-4 min-h-fit h-fit w-full mb-2" disabled={isLoading} type="submit">{isLoading ? "On it…" : "Reset password"}</button>
    </form>

    <div className="inline-block w-[75%] h-[1px] bg-neutral mt-5 mb-4"></div>
    
    <small className="my-1"><b className="inline-flex items-center gap-1">
    <span>Don't have an account?</span>
      <HashLink href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '/'} className="text-primary hover:text-gray-300 inline-flex justify-start items-center mt-0.5 gap-0.5">
        <FaDiscord className="h-5 w-5"/>
        <span>Contact us on Discord!</span>
      </HashLink>
    </b></small>
    <small className="mb-1"><b>Already remembered it? <HashLink className="text-neutral hover:text-gray-300" href="/auth/login">Click here to go back.</HashLink></b></small>
  </>;
};

const ResetPasswordComponent = ({ token: token, username: username }: { token: string, username?: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<string | null>(null);

  const { reset } = useSession();
  const { push } = useRouter();
  async function onSubmitNew(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setState(null);
 
    try {
      const formData = new FormData(event.currentTarget);
      const newPassword = formData.get("password");
      if (newPassword !== formData.get("confirm")) {
        setState("The passwords don't match");
        setIsLoading(false);
        return;
      }

      const res = await reset({ token, newPassword });
      if (isResultError(res, true)) {
        throw new Error(res[2] ?? undefined);
      }
      
      push(`/`);
    } catch (error: any) {
      setState(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return <>
    <h3 className="text-primary">
      It's okay.<br/>
    </h3>
    <h5 className="mb-4 mx-8 text-primary text-center">
      Everyone forgets their password.<br/>We can help.
    </h5>
    {state && <p className="text-error mb-1">{state}</p>}
    <form className="w-[75%]" onSubmit={onSubmitNew}>
      <input className="py-2 px-4 min-h-fit h-fit w-full overflow-hidden rounded-lg mb-2"
        disabled={isLoading} type="password" name="password" placeholder="New Password" required/>
      <input className="py-2 px-4 min-h-fit h-fit w-full overflow-hidden rounded-lg mb-2"
        disabled={isLoading} type="password" name="confirm" placeholder="Confirm Password" required/>
      <input disabled={isLoading} type="hidden" name="token" value={token} readOnly/>
      <button className="btn btn-secondary py-2 px-4 min-h-fit h-fit w-full mb-2" disabled={isLoading} type="submit">{isLoading ? "On it…" : "Reset password"}</button>
    </form>
    <div className="inline-block w-[75%] h-[1px] bg-neutral mt-5 mb-4"></div>
    <small className="my-1"><b>Already remembered it? <HashLink className="text-neutral hover:text-gray-300" href="/auth/login">Click here to go back.</HashLink></b></small>
  </>;
};