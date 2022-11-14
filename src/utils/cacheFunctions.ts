import fs from "fs"

export const cache = {
  async loadCachedFile(relativePath: string) {
    try {
      const file = fs.readFileSync(relativePath, "utf-8")

      return JSON.parse(file)
    } catch (err) {
      return
    }
  },

  async writeJSONFile(relativePath: string, content: string) {
    fs.writeFile(relativePath, JSON.stringify(content), (err) => {
      if (err) throw err
      console.log("The file has been saved!")
    })
  },
}
