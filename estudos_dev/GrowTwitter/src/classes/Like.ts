import { randomUUID } from "crypto";

class Like {
  id: string;

  constructor() {
    this.id = randomUUID();
  }
}
