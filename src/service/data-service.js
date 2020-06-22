export default class DataService {
  _baseUrl = "https://us-central1-cms-edu-2020-api.cloudfunctions.net";

  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`);

    if (!res.ok) {
      throw new Error(`Failed request ${res.status}`);
    }

    return await res.json();
  }

  async getNavigation() {
    return await this.getResource("/app/api/v1/section/navigation");
  }

  async getBannerSection() {
    return await this.getResource("/app/api/v1/section/info");
  }

  async getServiceSection() {
    return await this.getResource("/app/api/v1/section/service");
  }

  async getCoachSection() {
    return await this.getResource("/app/api/v1/section/coach");
  }

  async getOfferSection() {
    return await this.getResource("/app/api/v1/section/offer");
  }
}
