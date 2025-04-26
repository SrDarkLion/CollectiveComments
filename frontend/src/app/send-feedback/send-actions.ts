import {z} from "zod";

const formSchema = z.object({
  code: z.string().min(5, { message: "Insira o Código da empresa" }),
  type: z.string().min(1, { message: "Selecione o tipo do feeback" }),
  message: z.string().min(6, { message: "O feedback deve ter pelo menos 6 caracteres" }),
});


export async function dataSendForm(
  prevState: { errors: { [key: string]: string } | null; success?: boolean;},
  formData: FormData 
): Promise<{ errors: { [key: string]: string } | null; success?: boolean; }> {
  
  const code = formData.get("code") as string;
  const type = formData.get("type") as string
  const message = formData.get("message") as string;

  const result = formSchema.safeParse({ code, type, message});

  if (!result.success) {
    const formattedErrors: { [key: string]: string } = {};
    result.error.issues.forEach((issue) => {
      formattedErrors[issue.path[0]] = issue.message;
    });
   
    return {errors: formattedErrors}
  }
  
  return { errors: null, success: true};

}

