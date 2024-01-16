import './styles.css'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../../../../libs/supabase/database.types'
import AccountForm from './AccountForm'

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <AccountForm user={user} />
}