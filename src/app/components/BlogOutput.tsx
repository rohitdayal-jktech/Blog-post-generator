// components/BlogOutput.tsx
export default function BlogOutput({ output }: { output: string }) {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
           Blog Post
        </h2>
      </div>
      <div className="mt-6 p-4 border rounded bg-white dark:bg-gray-800 dark:text-white whitespace-pre-wrap">
        {output ? output : "Your generated blog will appear here."}
      </div>
    </>
  );
}
