import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ar"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as string)) {
    notFound();
  }
  return { messages: (await import(`/messages/${locale}.json`)).default };
});
