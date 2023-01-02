import Head from "next/head";
import styles from "./home.module.scss";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";
import { SubscribeButton } from "../components/SubscribeButton/SubscribeButton";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.amount / 100);

  return (
    <>
      <Head>
        <title>Home | ig.new</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br /> the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publication <br />
            <span>for {amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding illustration" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1MLrgyG4ke7Y8NgWe08ZhCnd");

  const product = {
    proceId: price.id,
    amount: price.unit_amount,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
