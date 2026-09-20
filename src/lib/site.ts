import { dict as en } from "../i18n/en.js";
import { dict as am } from "../i18n/am.js";

export type Lang = "en" | "am";
export const LANGS: Lang[] = ["en", "am"];

export function t(lang: Lang) {
  return lang === "am" ? am : en;
}

/** Localize an internal path: "/" -> "/am/", "/giving" -> "/am/giving" */
export function lpath(lang: Lang, path: string) {
  if (lang === "en") return path;
  return path === "/" ? "/am/" : `/am${path}`;
}

/** Given the current URL path, return the path in the other language */
export function swapLang(pathname: string, lang: Lang): string {
  if (lang === "en") {
    return pathname === "/" ? "/am/" : `/am${pathname}`;
  }
  return pathname.replace(/^\/am(\/|$)/, "/").replace(/^$/, "/") || "/";
}

export const SITE_URL = "https://eectoronto.org";
export const PAYPAL_DONATE_URL =
  "https://www.paypal.com/donate?token=sWCgYqgxxvIHUvoXkbE1m_rNmNz8nkW6NYaVgAMWe7qGvWVpKMzuL0feN9cIPXLZbZZ32tcmvviiv6Vh&locale.x=CA";

export const SERVICE_TIMES = [
  {
    day: "sunday",
    items: [
      { time: "10:00 AM – 1:00 PM", label: "amWorship", place: "mainCentre" },
      { time: "2:00 PM – 4:00 PM", label: "enWorship", place: "mainCentre" },
    ],
  },
  {
    day: "wednesday",
    items: [
      { time: "11:00 AM – 1:00 PM", label: "prayerSick", place: "" },
      { time: "5:30 PM – 7:30 PM", label: "discipleship", place: "" },
      { time: "6:30 PM – 9:00 PM", label: "teaching", place: "" },
    ],
  },
  { day: "friday", items: [{ time: "6:30 PM – 9:00 PM", label: "prayer", place: "" }] },
  { day: "saturday", items: [{ time: "6:00 PM – 9:00 PM", label: "youthAm", place: "" }] },
] as const;

export const TIME_LABELS: Record<string, { en: string; am: string }> = {
  prayerSick: { en: "Prayer for the sick", am: "ለታማሚዎች ጸሎት" },
  discipleship: { en: "Discipleship class", am: "የደቀ መዛሙርት ትምህርት" },
  teaching: { en: "Congregational teaching", am: "የማኅበር ትምህርት" },
  prayer: { en: "Congregational prayer", am: "የማኅበር ጸሎት" },
  youthAm: { en: "Adult youth Amharic service", am: "የወጣቶች የአማርኛ አገልግሎት" },
};
