export default class AuthClass {
  _baseUrl = "https://us-central1-cms-edu-2020-api.cloudfunctions.net";

  login(user) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    return fetch(`${this._baseUrl}/app/api/v1/user/login`, requestOptions);
  }
}
