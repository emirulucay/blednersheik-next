import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import { models } from "data/models";
import ModelItem from "components/ModelItem";

export default function Models() {
  return (
    <>
      <Head>
        <title>Models — blendersheik</title>
      </Head>
      <Layout>
        <div className="mt-32 md:mt-40 container px-12 md:px-0">
          <div className="flex flex-col gap-6">
            <h3 className="pageTitle md:text-3xl">My Model Collection</h3>
            <div className="flex flex-col sm:flex-row sm:flex-wrap">
              {models.map((model, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                  <ModelItem name={model.name} count={model.count} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
