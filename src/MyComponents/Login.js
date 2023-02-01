import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

export default function Login() {

    const { loginWithRedirect } = useAuth0();
  return (
    <>
      <button onClick={() => loginWithRedirect()} type="button" class="btn btn-primary btn-sm">Login</button>
    </>
  )
}

