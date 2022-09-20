import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import { models } from "data/models";
import ModelItem from "components/ModelItem";

export default function Models() {
  return (
    <>
      <Head>
        <title>blendersheik — Models</title>
      </Head>
      <Layout>
        <div className="mt-40 container mx-auto">
          <h3 className="font-inter text-bold tracking-tight text-white font-bold text-2xl">All Models</h3>
          <div className="flex gap-2 md:gap-4 flex-wrap mt-8">
            {models.map((model, index) => (
              <ModelItem name={model.name} key={index} count={model.count} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
