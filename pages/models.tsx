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
        <div className="mt-40 container px-6">
          <div className="mx-auto md:mx-0">
            <h3 className="font-inter text-bold tracking-tight text-white font-bold text-2xl">My Model Collection</h3>
            <div className="flex gap-2 md:gap-4 lg:gap-8 flex-wrap mt-8 justify-center">
              {models.map((model, index) => (
                <ModelItem name={model.name} key={index} count={model.count} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
