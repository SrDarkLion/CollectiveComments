import SendFeedbackForm from "@/components/send-feedback-form";

export default function sendFeedback() {

  return (
    <div className="flex justify-center pt-5">
      <div className="mx-auto max-w-xl w-full px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg font-medium mb-8">Enviar FeedBack</p>
        <div className="mx-auto w-full">
          <SendFeedbackForm/>
        
        </div>
      </div>

    </div>
  )
}