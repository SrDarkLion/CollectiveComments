import CardFeedback from "@/components/card-feedback";
export default function listFeedback() {

  type FeebackType={
    id:number
    type: string,
    date: string,
    message: string
  }

  const dataFeedback: FeebackType[] = [
    {
      id:1,
      type: "Sugestão",
      date: "06 de fev",
      message: "Supporting line text lorem ipsum dolor sit amet, consectetur."
    },
    {
      id:2,
      type: "Crítica",
      date: "06 de fev",
      message: "Supporting line text lorem ipsum dolor sit amet, consectetur."
    },
    {
      id:3,
      type: "Comentário",
      date: "06 de fev",
      message: "Supporting line text lorem ipsum dolor sit amet, consectetur"
    }
  ]
  

  return (
    <div className="flex justify-center py-5">
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full rounded-lg p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <p className="text-2xl font-medium mb-8 text-indigo-600 flex flex-col text-center">Listar Feedbacks <span className="text-black text-base font-normal">Busque os feedback informe dados dos campos</span></p>

          <div>
            <div className="">
              <div className="flex justify-end gap-8 ml-auto mb-4">
                <div className="relative flex items-center gap-5">
                  <div className="border flex flex-col">
                    <select className="w-full" name="" id="">
                      <option value="">Filtro</option>
                      <option value="">Sugestão</option>
                      <option value="">Crítica</option>
                      <option value="">Comentário</option>
                    </select>
                  </div>
                  
                  <div className="border flex">
                    <select name="" id="">
                      <option value="">Data</option>
                      <option value="">Mais recentes</option>
                      <option value="">Mais antigos</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {dataFeedback.map(feedback => <CardFeedback feedback={feedback} key={feedback.id}/>)}
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}