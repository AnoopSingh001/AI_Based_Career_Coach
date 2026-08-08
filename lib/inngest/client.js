import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "careerguide",
  name: "CareerGuide",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
