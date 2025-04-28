import { z } from "zod";

const formSchema = z.object({
  code: z.string().min(5, { message: "Insira o Código da empresa" }),
  password: z.string().min(6, { message: "Informe a senha correta" }),
});

export type FeedbackType = {
  id: number;
  type: string;
  date: string;
  message: string;
};

const mockFeedbacks: FeedbackType[] = [
  {
    id: 1,
    type: "sugestão",
    date: "2024-02-04",
    message: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 2,
    type: "crítica",
    date: "2024-02-06",
    message: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
  },
  {
    id: 3,
    type: "comentário",
    date: "2024-02-06",
    message: "Supporting line text lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 4,
    type: "comentário",
    date: "2024-02-06",
    message: "Supporting line text lorem ipsum dolor sit amet, consectetur",
  },
];

export async function dataSearchForm(
  prevState: {
    errors: { [key: string]: string } | null;
    success?: boolean;
    feedbacks?: FeedbackType[];
  },
  formData: FormData
): Promise<{
  errors: { [key: string]: string } | null;
  success?: boolean;
  feedbacks?: FeedbackType[];
  code: string
}> {
  const code = formData.get("code") as string;
  const password = formData.get("password") as string;
  const result = formSchema.safeParse({ code, password });

  if (!result.success) {
    const formattedErrors: { [key: string]: string } = {};
    result.error.issues.forEach((issue) => {
      formattedErrors[issue.path[0]] = issue.message;
    });
    return { errors: formattedErrors, feedbacks: [], code:code };
  }

  const VALID_CODE = "code1234";
  const VALID_PASSWORD = "123123";

  if (code !== VALID_CODE || password !== VALID_PASSWORD) {
    return {
      errors: { general: "Credenciais inválidas" },
      success: false,
      feedbacks: [],
      code:code
    };
  }
  return { errors: null, success: true, feedbacks: mockFeedbacks, code:code };
}
