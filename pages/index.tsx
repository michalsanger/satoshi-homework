import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout heading="Homepage">
      <div className="px-4 py-8 sm:px-0">
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
      </div>
    </Layout>
  );
};

export default Home;
