// * Imports Libs
import { useEffect } from "react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

// * components
import { Card } from "../components/Cards";
import { Header } from "../components/Header";
import { CardDevelopment } from "../components/CardDevelopment";

// * api
import { devApi } from "../configs/axios";

// * interfaces
import { IDevProps, IReactPostProps } from "../interface/dev.article.interface";

// * styles
import { SectionCards } from "../styles/home.styles";

const Home: NextPage<{
  allPosts: IDevProps[];
  reactNotice: IReactPostProps[];
}> = ({ allPosts, reactNotice }) => {
  return (
    <>
      <Head>
        <title>POSTS das suas principais ferramentas</title>
      </Head>
      <Header />
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
      <SectionCards>
        {allPosts?.map((post) => (
          <CardDevelopment
            created_at={post.created_at}
            description={post.description}
            positive_reactions_count={post.positive_reactions_count}
            title={post.title}
            url={post.url}
            user={post.user}
            key={post.id}
            cover_image={post.cover_image}
            id={post.id}
          />
        ))}
      </SectionCards>
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
    revalidate: 60 * 60 * 24, // one day
  };
};

export default Home;
