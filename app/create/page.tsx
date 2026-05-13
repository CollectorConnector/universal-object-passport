import { generateQR } from "@/lib/qr";

export default async function CreatePage() {
  const objectId = "example-object-id"; // Replace with Supabase insert result
  const qr = await generateQR(`https://yourdomain.com/object/${objectId}`);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Create Object Passport</h1>

      {qr && (
        <img
          src={qr}
          alt="Object QR Code"
          className="mt-4 w-48 h-48 border rounded"
        />
      )}
    </main>
  );
}
