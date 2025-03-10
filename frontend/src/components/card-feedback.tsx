
type CardFeedbackProps={
  feedback:{
    id:number,
    type: string,
    date: string,
    message: string
  }
}

export default function CardFeedback({feedback}:CardFeedbackProps) {
  return (
    
    <div className="shadow-sm rounded-md bg-purple-100 p-5">
      <h4 className="font-semibold text-lg">{feedback.type}</h4>
      <p className="text-sm font-medium">{feedback.date}</p>
      <p className="">{feedback.message}</p>
    </div>
    
  )
}