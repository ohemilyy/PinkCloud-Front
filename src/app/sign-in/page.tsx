'use client'
import './styles.css'
import Logo from '@/components/Logo'
import Console from './Console';

export default function SignIn() {
  return <>
    <div className="flex w-full min-h-screen items-center justify-center bg-full bg-img">
      <Console className="pb-10 pt-4 px-6 sm:px-16">
        <Logo className="mx-auto mt-2 mb-4" href={'/'} />
        <h4 className="mb-3">
          Log into our dashboard below.
        </h4>
    
      </Console>
    </div>
  </>;
}