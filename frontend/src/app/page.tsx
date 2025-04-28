'use client'
import CreateCodeForm from "@/components/create-code-form"
export default function Home() {
  return (
    <div className="flex justify-center pt-5">
      <div className="mx-auto max-w-xl w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full border rounded-lg p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <p className="text-2xl font-medium mb-8 text-indigo-600 flex flex-col text-center">Gerar Código FeedBack</p>
          <CreateCodeForm />
        </div>
      </div>
    </div>
  );
}
