import { describe, expect, it } from "vitest";
import { validateUpload } from "../../lib/batch-upload";

describe("validateUpload", () => {
  it("accepts a header row and normalizes valid records", () => {
    const result = validateUpload("record_id,action,quantity,value,category,minimum,increment,owner\nREC-001,create,100,99.5,Group-A,25,5,Team-A");

    expect(result.errors).toEqual([]);
    expect(result.rows).toEqual([
      { lineNumber: 2, identifier: "REC-001", action: "Create", quantity: 100, value: 99.5, category: "Group-A", minimum: 25, increment: 5, owner: "Team-A" },
    ]);
  });

  it("reports a useful error for an incomplete record", () => {
    const result = validateUpload("REC-001,hold,100,99.5,Group-A,25,5,Team-A");

    expect(result.rows).toEqual([]);
    expect(result.errors).toEqual([
      "Line 1 needs a record ID, Create or Update action, positive quantity and value, category, minimum, increment, and owner.",
    ]);
  });

  it("keeps valid rows available when another row has an error", () => {
    const result = validateUpload("REC-001,Create,100,99.5,Group-A,25,5,Team-A\nREC-002,Hold,100,99.5,Group-B,25,5,Team-B");

    expect(result.rows).toHaveLength(1);
    expect(result.errors).toHaveLength(1);
  });
});
