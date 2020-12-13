import { connectToDatabase } from "../util/mongodb";
import Nav from '../components/nav'

export default function Comments({ comments }) {
  return (
    <div>
      <Nav/>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li >
            <h2 className="text-5xl text-gray-900 dark:text-gray-100">{comment.name}</h2>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

    const comments = await db
    .collection("comments")
    .find({})
    .sort({ metacritic: -1 })
    .limit(10)
    .toArray();

  return {
    props: {
        comments: JSON.parse(JSON.stringify(comments)),
    },
  };
}