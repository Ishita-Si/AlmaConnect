import { useState } from 'react';

const AlumniForm = ({ onAddAlumni }) => {
  const [formData, setFormData] = useState({ name: '', email: '', batch: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAlumni(formData);
    setFormData({ name: '', email: '', batch: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-6 p-4 bg-white shadow rounded space-y-4">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded" required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded" required />
      <input name="batch" placeholder="Batch (e.g., 2020)" value={formData.batch} onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded" required />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Register
      </button>
    </form>
  );
};

export default AlumniForm;
