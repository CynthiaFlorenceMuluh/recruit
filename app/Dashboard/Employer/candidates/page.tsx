const candidates = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Designer",
  },
];

export default function CandidatesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Candidates
        </h1>

      <div className="space-y-4">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white p-5 rounded-2xl border"
          >
            <h2 className="text-xl font-semibold">
              {candidate.name}
            </h2>

            <p className="text-gray-500 mt-2">
              Applied for {candidate.role}
            </p>
          </div>
            
        ))}
     </div>
</div>
  );
}
