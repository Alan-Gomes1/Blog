import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

/**
 * Formata a data e hora para o formato "dd/MM/yyyy 'às' HH'h'mm".
 * @param rawDate - A data bruta a ser formatada.
 * @returns A data formatada como string.
 */
export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate);
  return format(date, "dd/MM/yyyy 'às' HH'h'mm", { locale: ptBR });
}

/**
 * Formata a data para exibir o tempo relativo em relação ao momento atual.
 * @param rawDate - A data bruta a ser formatada.
 * @returns A data formatada como string relativa.
 */
export function formatRelativeDate(rawDate: string): string {
  const data = new Date(rawDate);
  return formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
}
