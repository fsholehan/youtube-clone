import Head from "next/head";
import { useState } from "react";
import Header from "../components/container/Header";
import Section from "../components/container/Section";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Header isShow={() => setIsShow(!isShow)} />
        <div className="flex gap-x-6">
          <Sidebar />
          <Content />
        </div>
      </Section>
    </>
  );
}
