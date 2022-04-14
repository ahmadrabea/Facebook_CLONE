import react, { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import { getSession, signIn } from "next-auth/react";
import LogIn from "../components/LogIn";
import LeftSideBar from "../components/LeftSideBar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";

export default function Home({ session }) {
  if (!session) {
    return <LogIn />;
  }

  return (
    <div>
      <Head>
        <title>Facebook-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex bg-gray-100">
        <LeftSideBar />
        <Feed />
        <Widget />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //get the user

  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
