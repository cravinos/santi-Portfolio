// lib/actions.ts
import { ContactFormSchema } from "./schemas";
import { z } from "zod";

type Inputs = z.infer<typeof ContactFormSchema>;

export const sendEmail = async (data: Inputs) => {
  try {
    const response = await fetch('https://santi-portfolio-backend.onrender.com/api/v1/form_submissions', { // Replace with your actual Render URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        form_submission: data
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: true };
    }

    return { error: false };
  } catch (error) {
    console.error('Error sending message:', error);
    return { error: true };
  }
};