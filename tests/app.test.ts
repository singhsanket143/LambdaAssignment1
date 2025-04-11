/**
 * DONOT MODIFY THE BELOW FILE
 */
import request from "supertest";
import app from "../src/app";
import fs from "fs";
import path from "path";
import { config } from "../src/config/server.config";

describe("Controller Structure", () => {
  const controllersDir = path.join(__dirname, "../src/controllers");

  it("should have a controllers directory", () => {
    expect(fs.existsSync(controllersDir)).toBe(true);
  });

  it("should have only files ending with .controller.ts inside controllers folder", () => {
    const files = fs.readdirSync(controllersDir);
    const allValid = files.every((file) => file.endsWith(".controller.ts"));
    expect(allValid).toBe(true);
  });

  it("should have at least one controller file", () => {
    const files = fs.readdirSync(controllersDir);
    const controllerFiles = files.filter((file) =>
      file.endsWith(".controller.ts")
    );
    expect(controllerFiles.length).toBeGreaterThan(0);
  });
});

describe("Environment Variables", () => {
  it("should have PORT defined", () => {
    expect(process.env.PORT).toBeDefined();
  });

  it("should have API_VERSION defined", () => {
    expect(process.env.API_VERSION).toBeDefined();
  });

  it("should have PORT defined", () => {
    expect(process.env.PORT).toBeDefined();
  });

  it("should have API_VERSION defined", () => {
    expect(process.env.API_VERSION).toBeDefined();
  });

  it("should have PORT set to 3000", () => {
    expect(process.env.PORT).toBe("3000");
  });

  it("should have API_VERSION set to v1", () => {
    expect(process.env.API_VERSION).toBe("v1");
  });
});

describe("Config Structure", () => {
  it("should export an object with PORT, API_VERSION, and NODE_ENV", () => {
    expect(config).toHaveProperty("PORT");
    expect(config).toHaveProperty("API_VERSION");
    expect(config).toHaveProperty("NODE_ENV");
  });

  it("should have PORT set to 3000", () => {
    expect(config.PORT).toBe("3000");
  });

  it("should have API_VERSION set to v1", () => {
    expect(config.API_VERSION).toBe("v1");
  });

  it("should not access process.env directly in app or server", () => {
    const appPath = path.join(__dirname, "../src/app.ts");
    const appFile = fs.readFileSync(appPath, "utf8");

    expect(appFile).not.toMatch(/process\.env/);
  });
});

describe("Routes Folder Structure", () => {
  const v1RoutesDir = path.join(__dirname, "../src/routes/v1");

  it("should have a routes/v1/ folder", () => {
    expect(fs.existsSync(v1RoutesDir)).toBe(true);
  });

  it("should contain a v1Routes.ts file (or similar)", () => {
    const files = fs.readdirSync(v1RoutesDir);
    const hasV1RoutesFile = files.some(
      (file) => file.toLowerCase().includes("v1routes") && file.endsWith(".ts")
    );
    expect(hasV1RoutesFile).toBe(true);
  });
});

describe("API Versioning", () => {
  it("should return 200 for /api/v1/user route", async () => {
    const res = await request(app).get(`/api/${process.env.API_VERSION}/user`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "User route works!");
  });
});

describe("Controller Setup", () => {
  it("should call user controller on /user", async () => {
    const res = await request(app).get(`/api/${process.env.API_VERSION}/user`);
    expect(res.body.message).toBe("User route works!");
  });
});

describe("Router Setup", () => {
  it("should 404 for non-existent route", async () => {
    const res = await request(app).get(
      `/api/${process.env.API_VERSION}/nonexistent`
    );
    expect(res.statusCode).toBe(404);
  });
});

describe("Config Structure", () => {
  const configFilePath = path.join(__dirname, "../src/config/server.config.ts");

  it("should have a config folder with server.config.ts file", () => {
    expect(fs.existsSync(configFilePath)).toBe(true);
  });
});
