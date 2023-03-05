import React from "react";
import Layout from "components/Layout";
import ImageDetail from "components/ImageDetail";
import { detailedImage } from "data/builds";
import Head from "next/head";
import { builds } from "data/builds";
import BuildItem from "components/BuildItem";

export default function Builds() {
  return (
    <Layout>
      <Head>
        <title>Builds — blendersheik</title>
      </Head>
      <div className="container mt-24 lg:mt-32">
        {/* <div className="py-28 px-20">
          <ImageDetail width={1920} height={1080} src={detailedImage.src} details={detailedImage.details} />
        </div> */}
        <div className="flex flex-col gap-6">
          <h3 className="pageTitle md:text-3xl">My Build Collection</h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap">
            {builds.map((build, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <BuildItem name={build.name} count={build.count} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
