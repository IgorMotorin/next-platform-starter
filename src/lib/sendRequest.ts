import { useRestStore } from '@/store/restStore';
import { sendHistory } from './sendHistory';
import { fetchRequest } from './fetchRequest';
import { replaceVariables } from '@/accessory/function';
import { useVariablesStore } from '@/store/variablesStore';

export async function sendRequest(userId: string) {
  const state = useRestStore.getState();
  const url = state.url;
  const method = state.method;
  const variablesState = useVariablesStore.getState();
  const variables = variablesState.variables;
  const headers = state.headers.reduce<Record<string, string>>(
    (acc, header) => {
      if (header.select) {
        const [key] = replaceVariables(header.key, variables);
        const [value] = replaceVariables(header.value, variables);
        const keyText = String(key);
        acc[keyText] = String(value);
      }
      return acc;
    },
    {}
  );
  const query = state.query.reduce<Record<string, string>>((acc, query) => {
    if (query.select) {
      acc[query.key] = query.value;
    }
    return acc;
  }, {});
  let body: string | null = null;
  if (method !== 'GET') {
    switch (state.body.select) {
      case 'text': {
        const [text] = replaceVariables(state.body.text, variables);
        body = String(text);
        break;
      }
      case 'json': {
        const [json] = replaceVariables(state.body.json, variables);
        body = String(json);
        break;
      }
      case 'form':
        body = JSON.stringify(
          state.bodyTable.reduce<Record<string, string>>((acc, item) => {
            if (item.select) {
              const [key] = replaceVariables(item.key, variables);
              const [value] = replaceVariables(item.value, variables);
              const keyText = String(key);
              acc[keyText] = String(value);
            }
            return acc;
          }, {})
        );
        break;
    }
  }
  const [newUrl] = replaceVariables(url, variables);
  const startTime = performance.now();
  const { response, responseBody, error } = await fetchRequest(
    String(newUrl),
    {
      method,
      headers,
      body,
    },
    query
  );

  const endTime = performance.now();
  const latency = Number((endTime - startTime).toFixed(3));
  const requestSize = body ? new TextEncoder().encode(body).length : 0;
  const responseSize = responseBody
    ? new TextEncoder().encode(responseBody).length
    : 0;
  const statusCode = response?.status || 0;

  const historyItem = {
    timestamp: new Date().toISOString(),
    latency,
    statusCode,
    method,
    requestSize,
    responseSize,
    error,
    endpoint: String(newUrl),
    query: state.query,
    headers: state.headers,
    body: state.body,
    bodyTable: state.bodyTable,
  };

  await sendHistory(userId, historyItem);

  return { response, responseBody, historyItem, error };
}
