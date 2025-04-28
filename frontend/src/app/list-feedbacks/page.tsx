'use client';
import { useState, useCallback } from 'react';
import { FeedbackList } from "./feedbacktList";
import SearchForm from "./search-form";
import { dataSearchForm } from "./list-action";
import type { FeedbackType } from "./list-action";

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState<string>('');

  const handleSearchSubmit = useCallback(async (formData: FormData) => {
    setIsLoading(true);
    try {
      const result = await dataSearchForm({ errors: null }, formData);
      setFeedbacks(result.feedbacks as FeedbackType[]);
      if (result.success && result.feedbacks) {
        setFeedbacks(result.feedbacks as FeedbackType[]);
        setCode(result.code)
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    
      <div className="max-w-6xl m-auto p-4 sm:p-6 lg:p-8 ">
        <p className="text-2xl font-medium mb-8 text-indigo-600 flex flex-col text-center">Lista FeedBack </p>
      
      
        <SearchForm
          onSubmit={handleSearchSubmit}
          isLoading={isLoading}
        />

      
      <FeedbackList initialData={feedbacks} code={code} />
    </div>
  );
}