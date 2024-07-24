const API_URL = process.env.BASE_URL;

export async function getData(
  path: string = '/houses',
  init?: RequestInit,
): Promise<any> {
  if (!API_URL) {
    throw new Error('API_URL is not defined');
  }

  try {
    const url = `${API_URL}/api/${path}`;
    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${path}, status code: ${response.status}`,
      );
    }

    const data = await response.json();

    if (!data) {
      throw new Error('Expected data but received nothing');
    }
    return data;
  } catch (error) {
    return error;
  }
}

export async function getDataFromUrl(
  url: string,
  init?: RequestInit,
): Promise<any> {
  if (!url) {
    throw new Error('url is not defined');
  }

  try {
    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${url}, status code: ${response.status}`,
      );
    }

    const data = await response.json();

    if (!data) {
      throw new Error('Expected data but received nothing');
    }
    return data;
  } catch (error) {
    return error;
  }
}
