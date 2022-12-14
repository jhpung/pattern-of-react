import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../src/components/Button";
import { Layout } from "../src/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Link href="/counter-v1">
        <Button>Counter V1</Button>
      </Link>
      <Link href="/counter-v2">
        <Button>Counter V2</Button>
      </Link>
      <Link href="/counter-v3">
        <Button>Counter V3</Button>
      </Link>
      <Link href="/counter-v4">
        <Button>Counter V4</Button>
      </Link>
      <Link href="/counter-v5">
        <Button>Counter V5</Button>
      </Link>
    </Layout>
  );
};

export default Home;
