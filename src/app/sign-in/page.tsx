'use client'
import './styles.css'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/libs/supabase/database.types'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@supabase/auth-ui-react'
import Logo from '@/components/Logo'
import Console from './Console';

export default function SignIn() {
  const supabase = createClientComponentClient<Database>()
  const callbackRoute = process.env.NEXT_PUBLIC_CURR_DOMAIN + "/api/auth/callback";
  console.log(callbackRoute);

  return <>
    <div className="flex w-full min-h-screen items-center justify-center bg-full bg-img">
      <Console className="pb-10 pt-4 px-6 sm:px-16">
        <Logo className="mx-auto mt-2 mb-4" href={'/'} />
        <h4 className="mb-3">
          Log into our dashboard below.
        </h4>
        <Auth
          supabaseClient={supabase}
          view="magic_link"
          theme={'dark'}
          dark={true}
          appearance={{ theme: ThemeSupa }}
          showLinks={false}
          providers={['github', 'discord', 'google']}
          redirectTo={callbackRoute}
        />
      </Console>
    </div>
  </>;
}