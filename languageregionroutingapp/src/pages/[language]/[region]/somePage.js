//fetch function to be made utlity and used on pages to get api data with region + language + pageName as queries
async function fetchData(language, region) {
  const apiURL = `https://api.com/${language}/${region}/data`;
  const res = await fetch(apiURL);
  const data = await res.json();
  return data;
}

export async function getServerSideProps({ params }) {
  const { language, region } = params;
  //test 404 rendering if page doesnt exist, ideally if the api returns no data for the requested page - we throw 404?
  //can check FS for existance but some dynamic routing might cause a conflict.
  const flagFor404ForTesting = false;

  
  // Fetch data using language and region
  // const data = await fetchData(language, region);
  const data = { language: language, region: region };

  //show404 if no data from api
  if (flagFor404ForTesting) {
    return {
      notFound: true,
    };
  }
  return { props: { data } };
}

const somePage = ({ data }) => {
  // Render the page using the data
  if (data.region === "AB") {
    return (
      <div>
        <h1>
          Page 1 for {data.language}/{data.region}
        </h1>
        <p>conditional render for AB</p>
        {/* Render additional content using data */}
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          Page 1 for {data.language}/{data.region}
        </h1>
        {/* Render additional content using data */}
      </div>
    );
  }
};

export default somePage;
