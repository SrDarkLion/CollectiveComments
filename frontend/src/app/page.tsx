'use client'
import CreateCodeForm from "@/components/create-code-form"
// import { useState } from "react";
// import { FiCopy } from "react-icons/fi";

export default function Home() {
 

 

  return (
    <div className="flex justify-center pt-5">
      <div className="mx-auto max-w-xl w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full border rounded-lg p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <p className="text-2xl font-medium mb-8 text-indigo-600 flex flex-col text-center">Gerar Código FeedBack</p>

          <CreateCodeForm  />
          {/* {code && (
            <div className="sm:p-6 lg:p-8 border-2 border-green-500 rounded-md shadow-lg shadow-green-200 mt-4">
              <div className="flex justify-between items-end gap-3">
                <div className="w-full flex flex-col gap-2">
                  <label className="mt-1 font-semibold">Código Gerado</label>
                  <input
                    type="codefeedback"
                    className="w-full rounded-lg border h-11 border-gray-200 p-2  text-base shadow-xs"
                    disabled
                    value={code}
                  />
                </div>
                <button
                  onClick={handleCopiarCodigo}
                  className="flex items-center gap-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-700 px-5 h-11 text-sm font-medium text-white"
                >
                  <FiCopy size={20} />
                  Copiar
                </button>
              </div>
              <p className="mt-1 text-red-500 font-semibold">Observação: Salvar código em um local seguro  </p>
            </div>
          )} */}

        </div>
      </div>

    </div>
  );
}
