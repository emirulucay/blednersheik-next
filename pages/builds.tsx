import React from "react";
import Layout from "components/Layout";
import ImageDetail from "components/ImageDetail";
import { detailedImage } from "data/builds";

export default function Builds() {
  return (
    <Layout>
      <div className="container">
        <div className="py-32">
          <ImageDetail width={1920} height={1080} src={detailedImage.src} details={detailedImage.details} />
        </div>
      </div>
    </Layout>
  );
}
