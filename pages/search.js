import Head from "next/head";
import Header from "./api/Header";
import { useRouter } from "next/router";
import SearchResults from "./api/SearchResults";

var API_KEY = process.env.API_KEY;
var CONTEXT_KEY = process.env.CONTEXT_KEY;

function Search({ results }) {
  const router = useRouter();


  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <Header />
      <SearchResults results={results} />
    </div>
  );
}


export default Search;
 
export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";




  const data = useDummyData
    ? Response
    : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());


  return {
    props: {
      results: data,
    },
  };
}

