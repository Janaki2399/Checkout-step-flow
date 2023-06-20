import { createServer, Model, RestSerializer } from "miragejs";
import { faker } from "@faker-js/faker";

export default function setupMockServer() {
  faker.seed(150);
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      product: Model,
      order: Model,
    },

    routes() {
      this.namespace = "api";
      this.resource("products");
      this.resource("orders");
    },

    seeds(server) {
      [...Array(30)].forEach((_) => {
        server.create("product", {
          id: faker.string.uuid(),
          name: faker.commerce.productName(),
          image: faker.image.urlLoremFlickr({
            category: "technics",
            width: 280,
            height: 260,
          }),

          price: faker.commerce.price(),
        });
      });
    },
  });
}
