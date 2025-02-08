"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter, usePathname, locales } from "../../navigation";

const languages = [
  { code: "en", name: "English" }, { code: "de", name: "German" },
  { code: "fr", name: "French" }, { code: "it", name: "Italian" },
  { code: "tw", name: "Traditional Chinese" }, { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" }, { code: "th", name: "Thai" },
  { code: "vi", name: "Vietnamese" }, { code: "ru", name: "Russian" },
  { code: "es", name: "Spanish" }, { code: "pt", name: "Portuguese" },
  { code: "ar", name: "Arabic" }, { code: "tr", name: "Turkish" },
];

/**
 * Custom hook to get the current locale from the URL.
 */
function useClientLocale() {
  const [clientLocale, setClientLocale] = React.useState("en");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const segments = window.location.pathname.split("/");
      if (segments.length > 1 && languages.some((lang) => lang.code === segments[1])) {
        setClientLocale(segments[1]);
      } else {
        setClientLocale("en");
      }
    }
  }, []);

  return clientLocale;
}

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useClientLocale();
  const selectedLang = languages.find((lang) => lang.code === locale) || languages[0];
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (newLocale) => {
    const segments = pathname.split("/");
    if (segments[1] && locales.includes(segments[1])) {
      segments.splice(1, 1);
    }
    const newPath = segments.join("/") || "/";
    router.push(newPath, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="translator position-relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn p-0 border-2 rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "50px", height: "50px" }}
      >
        <Image
          src={`/flags/${selectedLang.code}.png`}
          alt={selectedLang.name}
          width={32}
          height={32}
          className="rounded-circle object-cover"
        />
      </button>

      {isOpen && (
        <div
          className="position-absolute end-0 mt-2 bg-white rounded shadow-lg z-index-1000"
          style={{ minWidth: "90px", padding: "2px" }} // Set a minimum width
        >
          <div className="d-flex flex-column">
            {languages.reduce((rows, lang, index) => {
              if (index % 2 === 0) {
                rows.push([lang]);
              } else {
                rows[rows.length - 1].push(lang);
              }
              return rows;
            }, []).map((row, rowIndex) => (
              <div key={rowIndex} className="d-flex px-2 py-1 gap-2">
                {row.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className="btn d-flex align-items-center px-2 py-1 text-start text-gray-700 focus-bg-gray-100 flex-grow-1"
                    style={{ minWidth: "50px" }} // Ensure buttons are wide enough
                  >
                    <Image
                      src={`/flags/${lang.code}.png`}
                      alt={lang.name}
                      width={32}
                      height={32}
                      className="rounded-circle object-cover me-2"
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
