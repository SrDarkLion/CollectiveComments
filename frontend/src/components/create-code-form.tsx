'use client';

import { useActionState } from 'react';
import { dataForm } from "@/app/actions";
import { FiCopy } from "react-icons/fi";
import toast from 'react-hot-toast';

export default function CreateCodeForm() {
  const [state, formAction] = useActionState(dataForm,
    {
      errors: null,
      success: false,
      code: "",
    });

  const handleCopiarCodigo = () => {
    navigator.clipboard.writeText(state.code?.toString() || "");
    toast.success('Código copiado com sucesso!');
  };

  return (
    <div>
      <form action={formAction} className="space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Nome da Empresa
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-2 pe-12 text-base shadow-xs"
              name="name"
              placeholder=""
            />
            {state.errors?.name && (
              <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Senha
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border border-gray-200 p-2 pe-12 text-base shadow-xs"
              name="password"
              placeholder=""
            />
            {state.errors?.password && (
              <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="repassword" className="font-semibold">
            Repetir Senha
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border border-gray-200 p-2 pe-12 text-base shadow-xs"
              name="repassword"
              placeholder=""
            />
            {state.errors?.repassword && (
              <p className="text-red-500 text-sm mt-1">{state.errors.repassword}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="block w-full rounded-lg bg-gray-950 hover:bg-gray-900 px-5 py-3 text-sm font-medium text-white"
        >
          Gerar Código
        </button>
        
      </form>
      {state.success && state.code && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <p className="font-semibold">Código gerado com sucesso:</p>
          <div className='flex justify-between items-center bg-white p-1 px-2 mt-2 rounded-md'>
            <p className='font-semibold'>{state.code}</p>
            <button
              onClick={handleCopiarCodigo}
              type="button"
              className="flex items-center gap-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-700 px-5 h-10 text-sm font-medium text-white"
            >
              <FiCopy size={20} />
              Copiar
            </button>
          </div>

          <p className='text-red-400 font-semibold mt-2 text-sm'>Observação: Salve o código em um local seguro  </p>
        </div>
      )}
    </div>
  );
}