import BuilderProductCard from "@/components/Cards/BuilderProductCard";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const BuilderMonitorPage = ({ allMonitors }) => {
  return (
    <div>
      {" "}
      <div className="lg:grid-cols-5 md:grid-cols-3 grid grid-cols-1 gap-5 mt-5">
        {allMonitors?.map((product) => (
          <BuilderProductCard
            key={product._id}
            product={product}
          ></BuilderProductCard>
        ))}
      </div>
    </div>
  );
};

export default BuilderMonitorPage;

BuilderMonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://custom-pc-forge-server.vercel.app/products/monitor`
  );
  const data = await res.json();

  return {
    props: {
      allMonitors: data.data,
    },
  };
};
