'use client'
import { useActionState, useEffect } from "react";
import { dataSendForm } from "./send-actions";
import toast from "react-hot-toast";

export default function SendFeedbackForm() {
  const [state, formAction] = useActionState(dataSendForm,
    {
      errors: null,
      success: false,
    });

  useEffect(() => {
    if (state.success) {
      toast.success('Success!');
    }
  }, [state.success]);

  return (
    <form action={formAction} className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="code" className="font-semibold">Código Empresa</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border h-10 border-gray-200 p-2 text-base shadow-xs"
            name="code"
            placeholder="Insira código"

          />
          {state.errors?.code && <p className="text-red-500 text-sm mt-1">{state.errors.code}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="font-semibold">Tipo do FeedBack</label>
        <div className="relative">
          <select
            className="mt-1.5 w-full h-10 p-2 rounded-lg border border-gray-200border border-gray-200 text-gray-700 text-base"
            name="type"
          >
            <option value="">Selecionar</option>
            <option value="suggestion">Sugestão</option>
            <option value="criticism">Crítica</option>
            <option value="comment">Comentário</option>
          </select>
        </div>
        {state.errors?.type && <p className="text-red-500 text-sm mt-1">{state.errors.type}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold">Mensagem</label>
        <div className="relative">
          <textarea
            className="w-full rounded-lg border border-gray-200 p-2 text-base shadow-xs"
            name="message"
            placeholder="Escreva seu feedback...."
          >
          </textarea>
        </div>
        {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-gray-950 hover:bg-gray-900 px-5 py-3 text-sm font-medium text-white"
      >
        Enviar
      </button>
    </form>
  )
}
