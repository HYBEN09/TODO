//* AuthService interface

//* signin (email, password):Promise<undefined>
//* signup (email, password):Promise<undefined>
//* logout ():undefined

export class AuthServiceImpl {
  constructor(httpClient, storage) {
    this.httpClient = httpClient;
    this.storage = storage;
  }

  async signin(email, password) {
    const response = await this.httpClient.fetch('auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { access_token } = await response.json();

    this.storage.save(access_token);
  }

  async signup(email, password) {
    this.httpClient.fetch('auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  logout() {
    this.storage.delete();
  }
}
