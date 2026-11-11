import { describe, expect, it } from "vitest";

import { certificates } from "@/components/sections";

describe("Certificates", () => {
  it("lists the Build with Meander certificate with its exact details", () => {
    const cert = certificates.find((c) => c.id === "MSPL-LMH-20260926-M338");

    expect(cert, "certificate with that ID is listed").toBeDefined();
    expect(cert?.program).toBe("LPU CODE-A-THON 2.0 Metaverse");
    expect(cert?.issuer).toBe("Meander Software Private Limited");
    expect(cert?.date).toBe("26 September 2026");
    expect(cert?.src).toContain("build-with-meander-certificate.jpg");
  });
});
