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
      address: Model,
      order: Model,
    },

    routes() {
      this.namespace = "api";
      //   this.timing = 100;
      this.resource("products");
      this.resource("addresses");
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
          //   image: faker.image.url(),
          price: faker.commerce.price(),
          currenct: faker.finance.currency(),
          inStock: faker.datatype.boolean(),
          offer: faker.helpers.arrayElement([
            "Save 50",
            "40% off",
            "22% off",
            "70% off",
          ]),
        });
      });
      //   server.create("address", {
      //     streetAddress: faker.location.streetAddress(true),
      //     state: faker.location.state(),
      //     city: faker.location.city(),
      //     zipCode: faker.location.zipCode(),
      //   } as object);
    },
  });
}
