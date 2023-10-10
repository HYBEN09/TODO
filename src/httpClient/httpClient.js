//* httpClient interface
//* fetch (endPoints, options):Promise<Response>
export const API_URL = 'https://www.pre-onboarding-selection-task.store/';
export class HttpClientImpl {
  #baseURL;
  #storage;

  constructor(baseURL, storage) {
    this.#baseURL = baseURL;
    this.#storage = storage;
  }

  async fetch(endPoint, options = {}) {
    const response = await window.fetch(this.#baseURL + endPoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.#storage.get(),
        ...options.headers,
      },
    });

    if (response.ok) {
      return response;
    } else {
      let errorResponse;
      try {
        errorResponse = await response.json();
      } catch (e) {
        errorResponse = await response.text();
      }

      throw new Error(
        `⛔️ HTTP Error ${response.status}: ${errorResponse.message}`
      );
    }
  }
}
