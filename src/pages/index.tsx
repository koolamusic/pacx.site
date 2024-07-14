import React from "react";
import { Meta } from "@/layouts";
import Head from "next/head";

import dynamic from "next/dynamic";
const View = dynamic(() => import("@/views/Fairy"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Stellar Attestation Service</title>
        <meta
          name="description"
          content="Build Stellar Reputations onchain with Soroban smart contracts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Meta />
      <View />
    </>
  );
}
