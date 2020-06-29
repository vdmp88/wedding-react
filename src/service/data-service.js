export default class DataService {
  _baseUrl = "https://us-central1-cms-edu-2020-api.cloudfunctions.net";

  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`);

    if (!res.ok) {
      throw new Error(`Failed request ${res.status}`);
    }

    return await res.json();
  }

  getNavigation() {
    return this.getResource("/app/api/v1/section/navigation");
  }

  getBannerSection() {
    return this.getResource("/app/api/v1/section/info");
  }

  getServiceSection() {
    return this.getResource("/app/api/v1/section/service");
  }

  getCoachSection() {
    return this.getResource("/app/api/v1/section/coach");
  }

  getOfferSection() {
    return this.getResource("/app/api/v1/section/offer");
  }

  updateOfferSection(data) {
    return fetch(`${this._baseUrl}/app/api/v1/section/offer`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("currentUser")),
      },
    });
  }
}
