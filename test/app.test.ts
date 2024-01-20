import request from "supertest";
import app from "../src/app";
import path from "path";
import { MatrixService } from "../src/services";

describe("App Integration Tests", () => {
  describe("POST /echo", () => {
    it("should respond with the matrix as a string", async () => {
      const response = await request(app)
        .post("/echo")
        .attach("file", path.resolve(__dirname, "matrix.csv"));

      expect(response.status).toBe(200);
      expect(response.body).toBe("1,2,3\n4,5,6\n7,8,9");
    });

    it("should respond with 400 for an invalid matrix file", async () => {
      const response = await request(app)
        .post("/echo")
        .attach("file", path.resolve(__dirname, "invalid_matrix.csv"));

      expect(response.status).toBe(400);
    });
  });

  describe("POST /invert", () => {
    it("should respond with the inverted matrix as a string", async () => {
      const response = await request(app)
        .post("/invert")
        .attach("file", path.resolve(__dirname, "matrix.csv"));

      // (Assuming the expected inverted matrix is correct from the previous test)
      const expectedInvertedMatrix = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ];
      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        MatrixService.matrixToString(expectedInvertedMatrix)
      );
    });

    it("should respond with 400 for an invalid matrix file", async () => {
      const response = await request(app)
        .post("/invert")
        .attach("file", path.resolve(__dirname, "invalid_matrix.csv"));

      expect(response.status).toBe(400);
    });
  });

  describe("POST /flatten", () => {
    it("should respond with the flattened matrix as a string", async () => {
      const response = await request(app)
        .post("/flatten")
        .attach("file", path.resolve(__dirname, "matrix.csv"));

      expect(response.status).toBe(200);
      expect(response.body).toBe("1,2,3,4,5,6,7,8,9");
    });

    it("should respond with 400 for an invalid matrix file", async () => {
      const response = await request(app)
        .post("/flatten")
        .attach("file", path.resolve(__dirname, "invalid_matrix.csv"));

      expect(response.status).toBe(400);
    });
  });

  describe("POST /sum", () => {
    it("should respond with the sum of the matrix", async () => {
      const response = await request(app)
        .post("/sum")
        .attach("file", path.resolve(__dirname, "matrix.csv"));

      expect(response.status).toBe(200);
      expect(response.body).toBe(45);
    });

    it("should respond with 400 for an invalid matrix file", async () => {
      const response = await request(app)
        .post("/sum")
        .attach("file", path.resolve(__dirname, "invalid_matrix.csv"));

      expect(response.status).toBe(400);
    });
  });

  describe("POST /multiply", () => {
    it("should respond with the product of the matrix", async () => {
      const response = await request(app)
        .post("/multiply")
        .attach("file", path.resolve(__dirname, "matrix.csv"));

      expect(response.status).toBe(200);
      expect(response.body).toBe(362880);
    });

    it("should respond with 400 for an invalid matrix file", async () => {
      const response = await request(app)
        .post("/multiply")
        .attach("file", path.resolve(__dirname, "invalid_matrix.csv"));

      expect(response.status).toBe(400);
    });
  });
});
