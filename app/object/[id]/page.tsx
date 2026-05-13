export default function ObjectPage({ params }: { params: { id: string } }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Object Passport: {params.id}</h1>
      <p className="mt-2 text-gray-600">
        View provenance, ownership history, and AI valuation.
      </p>
      {/* Object details + provenance timeline */}
    </main>
  );
}
