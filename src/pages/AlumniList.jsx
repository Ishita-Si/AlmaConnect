import { Link } from "react-router-dom";

const dummyAlumni = [
  { name: "John Doe", email: "john@example.com", batch: "2020" },
  { name: "Jane Smith", email: "jane@example.com", batch: "2021" },
];

const AlumniList = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Alumni List</h2>
      <ul className="space-y-4">
        {dummyAlumni.map((alum, i) => (
          <li key={i} className="border-b pb-2">
            <h3 className="font-semibold">{alum.name}</h3>
            <p className="text-sm">{alum.email}</p>
            <p className="text-sm">Batch: {alum.batch}</p>
            <Link
              to={`/profile/${encodeURIComponent(alum.email)}`}
              className="text-blue-600 hover:underline"
            >
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniList;
