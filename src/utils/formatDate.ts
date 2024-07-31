export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat("ru-RU", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(date);
