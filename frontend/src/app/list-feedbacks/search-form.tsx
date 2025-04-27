"use client";
import { useActionState } from "react";

type FormState = {
  errors: {
    code?: string;
    password?: string;
  } | null;
  success: boolean;
};

type SearchFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
  isLoading?: boolean;
};

export default function SearchForm({
  onSubmit,
  isLoading = false
}: SearchFormProps) {
  const [state, formAction] = useActionState(async (prevState: FormState, formData: FormData) => {
    await onSubmit(formData);
    return prevState;
  }, {
    errors: null,
    success: false
  });

  return (
    <div className="border rounded-lg p-5">
      <form action={formAction} className="flex items-center gap-4">
        <div className="flex flex-col flex-1 gap-2 pb-6">
          <label htmlFor="code" className="font-semibold">Código Empresa</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border h-10 border-gray-200 p-2 text-base shadow-xs"
              name="code"
              placeholder="CODE..."
              required
              disabled={isLoading}
            />
            {state.errors?.code && (
              <p className="text-red-500 text-sm mt-3">{state.errors.code}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-2 pb-6">
          <label htmlFor="password" className="font-semibold">Senha</label>
          <div className="relative flex gap-2">
            <input
              type="password"
              className="w-full rounded-lg border h-10 border-gray-200 p-2 text-base shadow-xs"
              name="password"
              placeholder="Senha"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              className="block rounded-lg bg-gray-950 hover:bg-gray-900 px-5 h-10 text-sm font-medium text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
          {state.errors?.password && (
            <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>
          )}
        </div>
      </form>
    </div>
  );
}