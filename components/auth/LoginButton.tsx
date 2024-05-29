'use client';

import { useRouter } from 'next/navigation';
import React from 'react'


interface Props {
    children: React.ReactNode;
    mode?: "model" | "redirect";
    asChild?: boolean
}


export const LoginButton:React.FC<Props> = ({children,asChild,mode="redirect"}) => {

    const router = useRouter()

    const onClick = () => {
        router.push("/auth/login")
    }

    if(mode === "model"){
        return (
            <span>TODO: Implement Model</span>
        )
    }

  return (
    <span onClick={onClick} className='cursor-pointer'>
        {children}
    </span>
  )
}
