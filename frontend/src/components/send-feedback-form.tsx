'use client'
import { FormEvent, useState } from "react";
import { z } from "zod";

export default function SendFeedbackForm(){
  const [code, setCode] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [mensage, setMensage] = useState<string>('');
  const [errors, setErrors] = useState<{[key:string]:string}>({});

  const formSchema = z.object({
      code: z.string().min(5, { message: 'Insira o Código da empresa' }),
      type: z.string().min(1, { message: 'Selecione o tipo do feeback' }),
      mensage: z.string().min(6, { message: 'Escreva deu feedback' }),
    })

  function dataForm(event:FormEvent){
    event.preventDefault();
    const result = formSchema.safeParse({ code, type, mensage });
  
    if (!result.success) {
      const formattedErrors: { [key: string]: string } = {};
      result.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
  }

  return(
    <form  onSubmit={dataForm} className="space-y-4 ">
      <div className="flex flex-col gap-2">
        <label htmlFor="code" className="font-semibold">Código Empresa</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border h-10 border-gray-200 p-2 text-base shadow-xs"
            name="code"
            placeholder=""
            onChange={(e)=> setCode(e.target.value)}
          />
          {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code}</p>}
        </div>
      </div>
  
      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="font-semibold">Tipo do FeedBack</label>
        <div className="relative">
          <select
            className="mt-1.5 w-full h-10 p-2 rounded-lg border border-gray-200border border-gray-200 text-gray-700 text-base" 
            name="type" 
            onChange={(e)=> setType(e.target.value)}>
            <option value="">Selecionar</option>
            <option value="suggestion">Sugestão</option>
            <option value="criticism">Crítica</option>
            <option value="comment">Comentário</option>
          </select>
        </div>
        {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensage" className="font-semibold">Mensagem</label>
        <div className="relative">
          <textarea
            className="w-full rounded-lg border border-gray-200 p-2 text-base shadow-xs" 
            name="mensage"
            placeholder="Escreva seu feedback...." 
            onChange={(e)=> setMensage(e.target.value)}>
            </textarea>
        </div>
        {errors.mensage && <p className="text-red-500 text-sm mt-1">{errors.mensage}</p>}
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
