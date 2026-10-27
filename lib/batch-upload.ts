export type UploadRow = {
  action: "Create" | "Update";
  category: string;
  increment: number;
  identifier: string;
  lineNumber: number;
  minimum: number;
  owner: string;
  quantity: number;
  value: number;
};

export type UploadValidation = {
  errors: string[];
  rows: UploadRow[];
};

const expectedColumns = ["record_id", "action", "quantity", "value", "category", "minimum", "increment", "owner"];

function splitLine(line: string) {
  return line.includes("\t") ? line.split("\t") : line.split(",");
}

function isHeader(columns: string[]) {
  return columns.map((column) => column.trim().toLowerCase()).join(",") === expectedColumns.join(",");
}

function parseAction(value: string) {
  const normalizedValue = value.trim().toLowerCase();

  if (normalizedValue === "create") return "Create";
  if (normalizedValue === "update") return "Update";

  return null;
}

export function validateUpload(source: string): UploadValidation {
  const lines = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return { rows: [], errors: ["Add at least one record to continue."] };
  }

  const firstLineColumns = splitLine(lines[0]);
  const startIndex = isHeader(firstLineColumns) ? 1 : 0;
  const rows: UploadRow[] = [];
  const errors: string[] = [];

  lines.slice(startIndex).forEach((line, index) => {
    const lineNumber = index + startIndex + 1;
    const [identifier = "", actionValue = "", quantityValue = "", valueValue = "", category = "", minimumValue = "", incrementValue = "", owner = "", ...extraColumns] = splitLine(line).map((value) => value.trim());
    const action = parseAction(actionValue);
    const quantity = Number(quantityValue.replaceAll(",", ""));
    const value = Number(valueValue.replaceAll("$", ""));
    const minimum = Number(minimumValue.replaceAll(",", ""));
    const increment = Number(incrementValue.replaceAll(",", ""));

    if (extraColumns.length > 0 || !identifier || !action || !Number.isFinite(quantity) || quantity <= 0 || !Number.isFinite(value) || value <= 0 || !category || !Number.isFinite(minimum) || minimum <= 0 || !Number.isFinite(increment) || increment <= 0 || !owner) {
      errors.push(`Line ${lineNumber} needs a record ID, Create or Update action, positive quantity and value, category, minimum, increment, and owner.`);
      return;
    }

    rows.push({ lineNumber, identifier, action, quantity, value, category, minimum, increment, owner });
  });

  if (rows.length === 0 && errors.length === 0) {
    errors.push("Add at least one record to continue.");
  }

  return { rows, errors };
}
