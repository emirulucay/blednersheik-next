import React from "react";
import Layout from "components/Layout";
import ImageDetail from "components/ImageDetail";
import { detailedImage } from "data/builds";
import Head from "next/head";

export default function Builds() {
  return (
    <Layout>
      <Head>
        <title>Builds — blendersheik</title>
      </Head>
      <div className="container">
        <div className="py-28 px-20">
          <ImageDetail width={1920} height={1080} src={detailedImage.src} details={detailedImage.details} />
        </div>
      </div>
    </Layout>
  );
}
