import SendFeedbackForm from "@/components/send-feedback-form";

export default function sendFeedback() {

  return (
    <div className="flex justify-center py-5">
      <div className="mx-auto max-w-xl w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full border rounded-lg p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <p className="text-2xl font-medium mb-8 text-indigo-600 flex flex-col text-center">Enviar o FeedBack <span className="text-black text-base font-normal">A empresa agradece seu feedback</span></p>
          <SendFeedbackForm/>
        </div>
      </div>
    </div>
  )
}