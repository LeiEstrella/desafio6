@ -4,23 +4,22 @@ class Contenedor {
    constructor(route) {
      this.route = route;
    }
    async writeFile(input) {
      fs.promises.writeFile(this.route, JSON.stringify(input));
    }
    async getAll() {
  
    getAll() {
      try {
        const data = await fs.promises.readFile(this.route, 'utf-8');
        return data ? JSON.parse(data) : [];
        const data = fs.readFileSync(this.route, 'utf-8');
        console.log(data)
        return data ? JSON.parse(data) : 'vieja';
      } catch (error) {
        console.error(error);
      }
    }
    async save(obj) {
    save(obj) {
      try {
        let data = await this.getAll();
        let id = !data.length ? 1 : parseInt(data[data.length - 1].id) + 1;
        let data = this.getAll();
        obj.id = !data.length ? 1 : parseInt(data[data.length - 1].id) + 1;
        data.push(obj)
        await this.writeFile(data);
        fs.writeFileSync(this.route, JSON.stringify(data))
      } catch (err) {
        console.error(err);
      }
  