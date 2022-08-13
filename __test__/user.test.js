
const app = require('../app');
const supertest = require('supertest');
const request = supertest(app)

describe("Test for user authentication", () => {
  it("test user can sign up with correct credentials", async done => {
    const response = await request
      .post("/api/v1/users/signup")
      .send({
        firstName: "lender",
        lastName: "square",
        phoneNumber: 8123456789,
        email: "test@example.com",
        password: "password",
      })
      expect(response.status).toBe(201);
      expect(response.message).toBe("registation successful")

    // expect(response.body.message).toBe("user created successfully");
  });
})



