import { connectToDatabase } from "../util/mongodb";
import Nav from '../components/nav'

export default function Usuarios({ usuarios }) {

  return (
    < >
      <Nav/>
      <div className="px-20">
        <h1 className="text-4xl py-10">Usuarios</h1>
        <ul>
          {usuarios.map((usuario) => (
            <li className="py-3 border-b border-gray-100">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100">{usuario.name}</h2>
              <p className="text-lg">{usuario.age}</p>
              <p>{usuario.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

    const usuarios = await db
    .collection("teste")
    .find({})
    .sort({ metacritic: -1 })
    .limit(10)
    .toArray();

  return {
    props: {
        usuarios: JSON.parse(JSON.stringify(usuarios)),
    },
  };
}