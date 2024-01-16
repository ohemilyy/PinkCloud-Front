'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/libs/supabase/database.types'
import useTheme from '@/hooks/useTheme'

export default function SignIn() {
  const supabase = createClientComponentClient<Database>()
  const [theme] = useTheme();

  const callbackRoute = process.env.NEXT_PUBLIC_CURR_DOMAIN + "/api/auth/callback";
  console.log(callbackRoute);

  return (
    <div className="row pt-16">
      <div className="col-6">
        <h1 className="header">Supabase Auth + Storage</h1>
        <p>
          Experience our Auth and Storage through a simple profile management example. Create a user
          profile and upload an avatar image. Fast, simple, secure.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <Auth
          supabaseClient={supabase}
          view="magic_link"
          appearance={{ theme: ThemeSupa }}
          theme={theme}
          showLinks={false}
          providers={[]}
          redirectTo={callbackRoute}
        />
      </div>
    </div>
  )
}