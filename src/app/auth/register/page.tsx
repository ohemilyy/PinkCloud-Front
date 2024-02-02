'use client';
import useSession from "@/hooks/useSession";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import HashLink from "@/components/HashLink";
import { isResultError } from "@/libs/Utils";
import { FaDiscord } from "react-icons/fa6";

export default function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  return token ? <DoRegister token={token}/> : <RequestRegister/>;
};

const RequestRegister = () => {
  return <>
    <h3 className="text-center text-primary">Sorry, only clients can register in our platform.</h3>
    <h5 className="text-center text-primary">If you're not a client yet, maybe you should contact us on Discord!</h5>
    <div className="inline-block w-[75%] h-[1px] bg-neutral mt-5 mb-4"></div>
    <div className="flex flex-col w-full justify-center items-center">
      <h5 className="text-center text-neutral">Contact us here:</h5>
      <HashLink href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '/'} className="btn btn-outline btn-secondary min-h-fit h-fit px-5 py-2.5 mt-3">
        <div className="flex flex-row justify-center items-center pb-0.5 gap-1.5">
          <FaDiscord className="mt-0.5 h-5 w-5"/>
          <span>Discord</span>
        </div>
      </HashLink>
    <small className="my-1"><b>Already have an account? <HashLink className="text-primary hover:text-gray-300" href="/auth/login">Sign in here!</HashLink></b></small>
    </div>
  </>;

};

const DoRegister = ({ token: token }: { token: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { register } = useSession();
  const { push } = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
 
    try {
      const formData = new FormData(event.currentTarget);

      const password = formData.get("password");
      if (password !== formData.get("confirm")) {
        setError("The passwords don't match");
        setIsLoading(false);
        return;
      }

      const token = formData.get("token");
      const username = formData.get("username")
      const res = await register({ token, username, password });
      if (isResultError(res, true))
        throw new Error(res[2] ?? undefined);
      
      push(`/`);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
 
  return <>
    <h3 className="text-primary">
      Welcome to your new dashboard 😉<br/>
    </h3>
    <h5 className="mb-4 mx-6 text-primary">
      Shall we set up your account?
    </h5>
    {error && <p className="text-error mb-1">{error}</p>}
    <form className="w-[75%]" onSubmit={onSubmit}>
      <input className="py-2 px-4 min-h-fit h-fit w-full overflow-hidden rounded-lg mb-2"
        disabled={isLoading} type="text" name="username" placeholder="Username" required/>
      <input className="py-2 px-4 min-h-fit h-fit w-full overflow-hidden rounded-lg mb-2"
        disabled={isLoading} type="password" name="password" placeholder="Password" required/>
      <input className="py-2 px-4 min-h-fit h-fit w-full overflow-hidden rounded-lg mb-2"
        disabled={isLoading} type="password" name="confirm" placeholder="Confirm Password" required/>
      <input disabled={isLoading} type="hidden" name="token" value={token} readOnly/>
      <button className="btn btn-secondary py-2 px-4 min-h-fit h-fit w-full mb-2" disabled={isLoading} type="submit">{isLoading ? "On it…" : "Set password"}</button>
    </form>
    <div className="inline-block w-[75%] h-[1px] bg-neutral mt-5 mb-4"></div>
    <small className="my-1"><b>Already have an account? <HashLink className="text-primary hover:text-gray-300" href="/auth/login">Sign in here!</HashLink></b></small>
  </>;
};