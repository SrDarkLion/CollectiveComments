import {z} from "zod";

const formSchema = z.object({
  code: z.string().min(5, { message: "Insira o Código da empresa" }),
  password: z.string().min(6, { message: "Informe a senha correta" }),
});

export type FeedbackType = {
    id: number
    type: string
    date: string,
    message: string
  }
  
const mockFeedbacks: FeedbackType[] = [
{
    id: 1,
    type: "suggestion",
    date: "06 de fev",
    message: "Supporting line text lorem ipsum dolor sit amet, consectetur."
},
{
    id: 2,
    type: "criticism",
    date: "06 de fev",
    message: "Supporting line text lorem ipsum dolor sit amet, consectetur."
},
{
    id: 3,
    type: "comment",
    date: "06 de fev",
    message: "Supporting line text lorem ipsum dolor sit amet, consectetur"
},
{
    id: 4,
    type: "comment",
    date: "06 de fev",
    message: "Supporting line text lorem ipsum dolor sit amet, consectetur"
}
]
  
export async function dataSearchForm(
    prevState: { errors: { [key: string]: string } | null; success?: boolean; feedbacks?: FeedbackType[]},
    formData: FormData 
  ): Promise<{ errors: { [key: string]: string } | null; success?: boolean; feedbacks?:FeedbackType[]}> {
    
  const code = formData.get("code") as string;
  const password = formData.get("password") as string;
  const result = formSchema.safeParse({code, password});

  if (!result.success) {
    const formattedErrors: { [key: string]: string } = {};
    result.error.issues.forEach((issue) => {
      formattedErrors[issue.path[0]] = issue.message;
    });
    return { errors: formattedErrors, feedbacks:[] };
  }
  
  if (code !== "code1234" || password !== "123123") {
    return { errors: { general: "Credenciais inválidas" }, feedbacks: [] };
  }

  console.log(code, password)
  return { errors: null, success: true, feedbacks: mockFeedbacks };
}

