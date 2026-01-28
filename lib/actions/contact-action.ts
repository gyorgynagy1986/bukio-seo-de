"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormData } from "../contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    restaurant?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
    privacy?: string[];
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name") as string,
    restaurant: formData.get("restaurant") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
    privacy: formData.get("privacy") === "on",
  };

  const validatedFields = contactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Bitte überprüfen Sie Ihre Eingaben.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, restaurant, email, phone, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "Bukio <noreply@studiobromo.hu>",
      to: ["hello@studiobromo.hu"],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}${restaurant ? ` (${restaurant})` : ""}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        ${restaurant ? `<p><strong>Restaurant:</strong> ${restaurant}</p>` : ""}
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
        ${message ? `<p><strong>Nachricht:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });

    // Optional: Send confirmation email to user
    await resend.emails.send({
      from: "Bukio <noreply@studiobromo.hu>",
      to: [email],
      subject: "Ihre Anfrage bei Bukio",
      html: `
        <h2>Vielen Dank für Ihre Nachricht!</h2>
        <p>Hallo ${name},</p>
        <p>wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
        <p>Mit freundlichen Grüßen,<br>Ihr Bukio Team</p>
      `,
    });

    return {
      success: true,
      message: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    };
  }
}
