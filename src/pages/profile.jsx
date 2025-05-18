import { useParams } from "react-router-dom";
import { useState } from "react";

const Profile = ({ user }) => {
  const { email } = useParams();

  // Simulated alumni data — in real app, fetch from backend or global state
  const alumniData = {
    "admin@example.com": { name: "Admin User", batch: "2020" },
    // add other alumni data if you want
  };

  const profile = alumniData[email] || { name: "Unknown", batch: "N/A" };

  // Reviews state (array of { reviewer, comment })
  const [reviews, setReviews] = useState([]);

  // For new review input
  const [comment, setComment] = useState("");

  const addReview = () => {
    if (!comment.trim()) return;
    setReviews((prev) => [...prev, { reviewer: user.email, comment }]);
    setComment("");
  };

  // Simple connect simulation
  const [connected, setConnected] = useState(false);
  const handleConnect = () => setConnected(true);

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
      <p className="mb-4">Email: {email}</p>
      <p className="mb-4">Batch: {profile.batch}</p>

      <button
        onClick={handleConnect}
        disabled={connected}
        className={`mb-6 px-4 py-2 rounded ${
          connected ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
        } text-white`}
      >
        {connected ? "Connected" : "Connect"}
      </button>

      <div>
        <h3 className="font-semibold mb-2">Reviews</h3>
        {reviews.length === 0 && <p className="text-gray-500 mb-4">No reviews yet.</p>}

        <ul className="mb-4 space-y-3">
          {reviews.map((r, i) => (
            <li key={i} className="border-b pb-2">
              <strong>{r.reviewer}:</strong> {r.comment}
            </li>
          ))}
        </ul>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a review..."
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button
          onClick={addReview}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default Profile;
