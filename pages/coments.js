import { connectToDatabase } from "../util/mongodb";

import Nav from '../components/nav'

export default function Comments({ comments }) {

  return (
    < >
      <Nav/>
      <div className="px-20">
        <h1 className="text-4xl py-10">Comments</h1>
        <ul>
          {comments.map((c) => (
            <li className="py-3">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100">{c.name}</h2>
              <p className="text-4xl">{c.email}</p>
              <p>{c.text}</p>
              <p>{c.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

    const comments = await db
    .collection("comments")
    .find({})
    .sort({ metacritic: -1 })
    .limit(5)
    .toArray();

  return {
    props: {
        comments: JSON.parse(JSON.stringify(comments)),
    },
  };
}