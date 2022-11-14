export const env = {
  getByKey(key: string) {
    return process.env[key]
  },
  appMode() {
    return this.getByKey("MODE") || "PROD"
  },
  itNotProdMode() {
    return this.appMode() !== "PROD"
  },
  isLocalTestMode() {
    return this.appMode() === "LOCAL_TEST"
  },
}
