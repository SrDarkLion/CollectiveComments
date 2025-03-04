import CardFeedback from "@/components/card-feedback";

export default function listFeedback() {

  return (
    <div className="flex justify-center py-5">
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full border rounded-lg p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <p className="text-2xl font-medium mb-8 text-indigo-600 flex flex-col">Listar Feedbacks <span className="text-black text-base font-normal">Busque os feedback informe dados dos campos</span></p>

          <div>
            {/* <h2 className="font-bold text-xl">Historico de Feedbacks</h2> */}
            <div className="">
              <div className="flex justify-end gap-8 ml-auto border">
                <div className="relative flex items-center gap-8">
                  <div className="">
                    <select name="" id="">
                      <option value="">Filtro</option>
                      <option value="">Sugestão</option>
                      <option value="">Crítica</option>
                      <option value="">Comentário</option>
                    </select>
                  </div>
                  
                  <div className="">
                    <select name="" id="">
                      <option value="">Data</option>
                      <option value="">Mais recentes</option>
                      <option value="">Mais antigos</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <CardFeedback/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}