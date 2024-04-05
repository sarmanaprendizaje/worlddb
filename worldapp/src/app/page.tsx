import { dbclient } from "@/utils/dbclient";

export default async function Home() {
  const countries = await dbclient.country.findMany({
    take: 20
  })
  console.log(countries)
  return (
    <div>
      <h1 className="text-2xl text-center mt-5">Paises ({countries.length})</h1>
      {countries.map(country => (
        <div key={country.code} className="border p-3 m-5 rounded-full pl-10 shadow-lg my-10">
          <h2 className="text-xl">{country.name} ({country.code})</h2>
          <h3>{country.continent}</h3>
        </div>
      ))}
    </div>
  );
}
