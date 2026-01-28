import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name muss mindestens 2 Zeichen lang sein")
    .max(100, "Name darf maximal 100 Zeichen lang sein"),
  restaurant: z
    .string()
    .max(100, "Restaurantname darf maximal 100 Zeichen lang sein")
    .optional()
    .or(z.literal("")),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z
    .string()
    .max(20, "Telefonnummer darf maximal 20 Zeichen lang sein")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .max(2000, "Nachricht darf maximal 2000 Zeichen lang sein")
    .optional()
    .or(z.literal("")),
  privacy: z.literal(true, {
    errorMap: () => ({
      message: "Sie müssen die Datenschutzerklärung akzeptieren",
    }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
