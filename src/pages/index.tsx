// * Imports Libs
import { useState } from "react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

// * components
import { Card } from "../components/Cards";
import { Header } from "../components/Header";

// * api
import { devApi } from "../configs/axios";

// * interfaces
import { IDevProps, IReactPostProps } from "../interface/dev.article.interface";

// * styles
import { Container } from "./styles/home.styles";

const Home: NextPage<{ data: IDevProps[]; reactNotice: IReactPostProps[] }> = ({
  data,
  reactNotice,
}) => {
  console.log(reactNotice[0].user);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Container>
        <Card
          canonical_url={reactNotice[0].canonical_url}
          cover_image={reactNotice[0].cover_image}
          created_at={reactNotice[0].created_at}
          description={reactNotice[0].description}
          social_image={reactNotice[0].social_image}
          title={reactNotice[0].title}
          url={reactNotice[0].url}
          tag_list={reactNotice[0].tag_list}
          user={reactNotice[0].user}
        />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = devApi.get("articles/latest", {
    params: {
      tags: ["JavaScript", "TypeScript", "webdev"],
      per_page: 30,
      page: 1,
    },
  });
  const reactNotice = devApi.get("articles/latest", {
    params: {
      tag: "react",
      per_page: 1,
      page: 1,
    },
  });

  const [posts, react] = await Promise.all([response, reactNotice]);
  console.log(react.status);
  if (posts.status === 200 && react.status === 200) {
    const reactNotice = await react.data;
    const allPosts = await posts.data;
    return {
      props: { allPosts, reactNotice },
    };
  }

  return {
    redirect: {
      destination: "/404",
      permanent: false,
    },
  };
};

export default Home;

/*

Autorização =  AAAAAAAAAAAAAAAAAAAAAMs4bQEAAAAA3TrS2sHF0Z9Xs8MYK5MtXs%2FD%2Bc8%3DzjDcw30HvjDuYR8JkdPRTNh2T2LoJq5t9OhTwRjY3p9owSsf3k


key e secret= IhAqf6ATCD6QriiDyZl1OVkVg


key e secret=  F6C3WxrpHibgPgAzdyZm6lrZfJXaeHUH4EyE7zxdH87Q5ZKycI


acess token e secret =  1508954927275687944-5V8FQGnRrGMxvgXqC7PNFBFf2uFeVL


acess token e secret =  KNC5Xy8yma1taVm8VZ1MTdNIBsC62LmhuUtf40eMkmGUr


http://127.0.0.1:xxxx/


client secret 0k-3N3uXhgZdSTQXjlSMtSLtf92Je2btGzt_ja5WTlACQHG7dg

client ID VURSenNKVmUyMWNtNzZ5dXItaU46MTpjaQ



*/
