export function dateFormat(data: string) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(
    new Date(data)
  );
}
