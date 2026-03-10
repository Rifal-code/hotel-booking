"use server";

import { ContactSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData,
) => {
  const validatedVields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedVields.success) {
    return { error: validatedVields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedVields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return { message: "Thanks for contact us" };
  } catch (error) {
    console.log(error);
  }
};
