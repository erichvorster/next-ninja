import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"
import Router from "next/dist/server/router";

const NotFound = () => {
 const router = useRouter();

 useEffect(() => {
    setTimeout(() => {
        router.push('/');

    },3000)
 }, [])


  return <div className="not-found">
    <h1>Oops</h1>
    <p>This page cannot be found</p>
    <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
  </div>;
};

export default NotFound;
