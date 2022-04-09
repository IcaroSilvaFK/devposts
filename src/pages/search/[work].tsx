import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { devApi } from "../../configs/axios";
import { useRouter } from "next/router";

import { CardDevelopment } from "../../components/CardDevelopment";
import { Header } from "../../components/Header";

import { IDevProps } from "../../interface/dev.article.interface";

import { Section } from "./styles";

const SearchPage: NextPage<{ data: IDevProps[] }> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.work}</title>
      </Head>
      <Header />
      <Section>
        {data.map((post) => (
          <CardDevelopment
            cover_image={post.cover_image}
            description={post.description}
            created_at={post.created_at}
            positive_reactions_count={post.positive_reactions_count}
            key={post.id}
            title={post.title}
            url={post.url}
            user={post.user}
            id={post.id}
          />
        ))}
      </Section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const work = ctx.params?.work;
  console.log(work);
  const response = await devApi.get("articles/latest", {
    params: {
      tag: work,
      per_page: 30,
      page: 1,
    },
  });

  if (response.status === 200) {
    const { data } = response;

    return {
      props: {
        data,
      },
    };
  }

  return {
    props: {},
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default SearchPage;
