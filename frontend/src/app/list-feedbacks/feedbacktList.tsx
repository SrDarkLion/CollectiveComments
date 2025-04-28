'use client';
import { useState, useMemo, useEffect } from 'react';
import CardFeedback from '@/components/card-feedback';
import { FeedbackType } from './list-action';

type FeedbackFilter = 'todos' | FeedbackType['type'];

type FeedbackListProps = {
  initialData?: FeedbackType[];
  code: string;
};


export function FeedbackList({ initialData = [], code }: FeedbackListProps) {

  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>(initialData);
  const [filter, setFilter] = useState<FeedbackFilter>('todos');

  useEffect(() => {
    setFeedbacks(initialData);
  }, [initialData]);

  const filteredFeedbacks = useMemo(() => {
    return filter === 'todos'
      ? feedbacks
      : feedbacks.filter(fb => fb.type === filter);
  }, [feedbacks, filter]);

  return (
    <div className="p-6">
      {filteredFeedbacks.length > 0 &&
        <div>
          <h2 className='font-semibold text-xl text-center mb-8'>Empresa <span className=' uppercase text-lg text-indigo-600 '>{code}</span></h2>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='font-semibold text-lg'>Histórico de Feedbacks </h2>
           <div className='flex gap-2'>
            <div>
              <select
                className="p-2 border rounded"
                onChange={(e) => setFilter(e.target.value as FeedbackFilter)}
                value={filter}
                disabled={feedbacks.length === 0}
              >
                <option value="todos">Filtro Tipo</option>
                <option value="sugestão">Sugestões</option>
                <option value="crítica">Críticas</option>
                <option value="comentário">Comentários</option>
              </select>
            </div>

            <div>
              <select
                className="p-2 border rounded"
                disabled={feedbacks.length === 0}
              >
                <option value="" >Por Data</option>
                <option value="recentes">Mais recentes</option>
                <option value="antigas">Mais antigas</option>
              </select>
            </div>
            </div>
          </div>
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