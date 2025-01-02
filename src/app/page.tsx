import CardList from "@/components/CardList";
import { client } from "@/sanity/lib/client";

async function getData() {
  const fetchData = await client.fetch(`*[_type == "post"]{
  title,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  body

}`);
  return fetchData;
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1 className="text-center text-4xl font-bold m-20">Artificail Intelligence Blogs</h1>
      <CardList data={data} />
    </main>
  );
}
