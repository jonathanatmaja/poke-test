import { faker } from "@faker-js/faker";
import { useState } from "react";
import toast from "react-hot-toast";

export const useGetSummary = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGetSummary = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSummary(faker.lorem.sentences());
    } catch {
      toast.error("Failed to get summary!");
    } finally {
      setLoading(false);
    }
  };

  return { onGetSummary: handleGetSummary, summary, loading };
};
