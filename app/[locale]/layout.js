import ClientProviders from "@/components/ClientProviders";
import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/bootstrap.css";
import "public/assets/css/style.css";
import "./favicon.ico";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { barlow, firaSans } from "@/lib/font";

// Import all language message files
import messagesEn from "@/messages/en.json";
import messagesFr from "@/messages/fr.json";
import messagesDe from "@/messages/de.json";
import messagesIt from "@/messages/it.json";
import messagesTw from "@/messages/tw.json";
import messagesJa from "@/messages/ja.json";
import messagesKo from "@/messages/ko.json";
import messagesTh from "@/messages/th.json";
import messagesVi from "@/messages/vi.json";
import messagesRu from "@/messages/ru.json";
import messagesEs from "@/messages/es.json";
import messagesPt from "@/messages/pt.json";
import messagesAr from "@/messages/ar.json";
import messagesTr from "@/messages/tr.json";

// Define messages object
const messages = {
  en: messagesEn,
  fr: messagesFr,
  de: messagesDe,
  it: messagesIt,
  tw: messagesTw,
  ja: messagesJa,
  ko: messagesKo,
  th: messagesTh,
  vi: messagesVi,
  ru: messagesRu,
  es: messagesEs,
  pt: messagesPt,
  ar: messagesAr,
  tr: messagesTr,
};

export const metadata = {
  title: "TEDA GLOBAL LIMITED",
  description:
    "Discover TEDA GLOBAL LIMITED, a trusted crypto investment firm established on August 6, 2024. Specializing in financial market management, we empower clients with expert strategies and secure solutions for navigating the digital economy",
};

export default function RootLayout({ children, params }) {
  const { locale } = params;
  const messagesForLocale = messages[locale] || messages["en"];

  return (
    <html lang={locale} className={`${firaSans.variable} ${barlow.variable}`}>
      <body>
        <ClientProviders locale={locale} messages={messagesForLocale}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}