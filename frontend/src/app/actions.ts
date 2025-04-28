"use server"
import { z } from "zod";

const formSchema = z
  .object({
    name: z.string().min(1, { message: "O nome da empresa é obrigatório." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
    repassword: z.string(),
  })
  .refine((data) => data.password === data.repassword, {
    message: "As senhas estão diferentes.",
    path: ["repassword"],
  });

function gerarCodigoMock(name: string): string {
  const uuidPart = Math.random().toString(36).substring(2, 8).toUpperCase(); 
  const code = `CODE-${name.toUpperCase().slice(0, 3)}-${uuidPart}`; 
  return code;
}

export async function dataForm(
  prevState: { errors: { [key: string]: string } | null; success?: boolean; code?: string },
  formData: FormData 
): Promise<{ errors: { [key: string]: string } | null; success?: boolean; code?: string }> {
  
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;
  const repassword = formData.get("repassword") as string;
  const result = formSchema.safeParse({ name, password, repassword });

  if (!result.success) {
    const formattedErrors: { [key: string]: string } = {};
    result.error.issues.forEach((issue) => {
      formattedErrors[issue.path[0]] = issue.message;
    });
    return { errors: formattedErrors };
  }

  const generatedCode = gerarCodigoMock(name);

  return { errors: null, success: true, code: generatedCode };
}