export function formatDate(dateString: string): string {
  return new Date(`${dateString}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
