import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

const Post = props => (
  <Layout>
    <Head>
      <title>{props.show.name}</title>
      <meta name="description" content={props.show.name} />
    </Head>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
