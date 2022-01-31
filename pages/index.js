
import Head from 'next/head';
import { getData } from '../__lib__/helpers/HttpService';
import Banner from './../src/components/client/banner/Banner';
import Cards from './../src/components/client/cards/Cards';
import Layout from './../src/components/client/layout/index';
import TrustedCompany from './../src/components/client/trustedCompanies/TrustedCompany';


function index({ jobs, generalJob }) {

  return (
    <>
      <Head>
        <title>Talentdrop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Layout>
        <Banner />
        <TrustedCompany />
        <Cards jobs={jobs} generalJob={generalJob} />
      </Layout>
    </>
  );
}
export default index

export async function getServerSideProps() {
  const res = await getData('/jobs')
  const general = await getData('/job/6')
  return {
    props: {
      jobs: res,
      generalJob: general
    }
  }
}
