'use client';
import { useState, useMemo, useEffect } from 'react';
import CardFeedback from '@/components/card-feedback';

type FeedbackType = {
  id: number;
  type: string
  date: string;
  message: string;
};

type FeedbackFilter = 'all' | FeedbackType['type'];

export function FeedbackList({ initialData = [] }: { initialData?: FeedbackType[] }) {
 
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>(initialData);
  const [filter, setFilter] = useState<FeedbackFilter>('all');

  useEffect(() => {
    setFeedbacks(initialData);
  }, [initialData]);

  console.log("feedback", feedbacks, initialData.length);

  const filteredFeedbacks = useMemo(() => {
    return filter === 'all' 
      ? feedbacks 
      : feedbacks.filter(fb => fb.type === filter);
  }, [feedbacks, filter]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {filteredFeedbacks.length > 0 && 
      <div className="mb-4">
        <select
          className="p-2 border rounded"
          onChange={(e) => setFilter(e.target.value as FeedbackFilter)}
          value={filter}
          disabled={feedbacks.length === 0}
        >
          <option value="all">Todos</option>
          <option value="suggestion">Sugestões</option>
          <option value="criticism">Críticas</option>
          <option value="comment">Comentários</option>
        </select>
      </div>
      
      
      }
      <div className="space-y-4">
        {filteredFeedbacks.length > 0 ? (
          filteredFeedbacks.map(feedback => (
            <CardFeedback key={feedback.id} feedback={feedback} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">
            {feedbacks.length === 0 ? 'Nenhum feedback carregado' : 'Nenhum resultado encontrado'}
          </p>
        )}
      </div>
    </div>
  );
}