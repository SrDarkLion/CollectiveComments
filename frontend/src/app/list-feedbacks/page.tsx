'use client';
import { useState, useCallback } from 'react';
import { FeedbackList } from "./feedbacktList";
import SearchForm from "./search-form";
import { dataSearchForm } from "./list-action";
import type { FeedbackType } from "./list-action";

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = useCallback(async (formData: FormData) => {
    setIsLoading(true);
    try {
      const result = await dataSearchForm({ errors: null }, formData);
      console.log("resultado", result.feedbacks)
      setFeedbacks(result.feedbacks as FeedbackType[]);
      // if (result.success && result.feedbacks) {
      //   console.log(result.feedbacks)
      //   setFeedbacks(result.feedbacks as FeedbackType[]);
      // }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-8">Feedbacks</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <SearchForm
          onSubmit={handleSearchSubmit}
          isLoading={isLoading}
        />
      </div>
      <FeedbackList initialData={feedbacks} />
    </div>
  );
}