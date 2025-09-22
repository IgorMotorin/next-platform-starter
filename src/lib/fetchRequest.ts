type Options = {
  method: string;
  headers?: Record<string, string>;
  body?: string | null;
};
export async function fetchRequest(
  url: string,
  options: Options,
  query: Record<string, string>
) {
  let response: Response | null = null;
  let responseBody: string | null = null;
  let error: string | null = null;
  const params = new URLSearchParams(query);
  const str = params.toString() ? '?' + params.toString() : '';
  const tmp = url + str;
  try {
    response = await fetch(tmp, options);
    responseBody = await response.clone().text();
  } catch (e: unknown) {
    error = e instanceof Error ? e.message : 'Network error';
  }
  return { response, responseBody, error };
}
