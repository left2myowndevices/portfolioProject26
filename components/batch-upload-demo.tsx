"use client";

import { type ChangeEvent, type DragEvent, useRef, useState } from "react";
import { type UploadRow, validateUpload } from "@/lib/batch-upload";

const sampleUpload = `record_id,action,quantity,value,category,minimum,increment,owner
REC-001,Create,100,98.840,Group-A,25,5,Team-A
REC-002,Update,250,98.800,Group-B,50,10,Team-B
REC-003,Update,500,93.200,Group-C,100,25,Team-C`;

type UploadStage = "entry" | "verification" | "complete" | "error";

type ValidationResult = {
  errors: string[];
  rows: UploadRow[];
};

export default function BatchUploadDemo() {
  const [content, setContent] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ValidationResult>({ rows: [], errors: [] });
  const [stage, setStage] = useState<UploadStage>("entry");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canReview = content.trim().length > 0;

  function setFile(file: File | undefined) {
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setError("Select a CSV file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setContent(String(reader.result ?? ""));
      setFileName(file.name);
      setError(null);
    };
    reader.onerror = () => setError("The file could not be read.");
    reader.readAsText(file);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.[0]);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    setFile(event.dataTransfer.files?.[0]);
  }

  function handlePasteChange(value: string) {
    setContent(value);
    setFileName(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function reviewData() {
    setResult(validateUpload(content));
    setStage("verification");
  }

  if (stage === "complete") {
    return (
      <section className="interface-upload-result">
        <h2>Upload complete</h2>
        <p>Your records are ready for processing.</p>
        <button className="interface-primary-button" type="button" onClick={() => setStage("entry")}>Start another upload</button>
      </section>
    );
  }

  if (stage === "error") {
    return (
      <section className="interface-upload-result">
        <h2 className="interface-error-text">Server Error</h2>
        <p>We&apos;re sorry. The server encountered an internal error and was unable to complete your request. Please try again.</p>
        <button className="interface-primary-button" type="button" onClick={() => setStage("entry")}>Retry</button>
      </section>
    );
  }

  if (stage === "verification") {
    const total = result.rows.length + result.errors.length;
    const hasErrors = result.errors.length > 0;
    const allErrors = result.rows.length === 0;

    return (
      <section className="interface-upload-result">
        {hasErrors ? <h2 className="interface-error-text">Upload has {result.errors.length} error(s) in {total} line(s).</h2> : null}
        <p>{hasErrors ? allErrors ? "Please select Back and try again." : `Click Back to correct, or Submit to process ${result.rows.length} valid records.` : `Click Submit to process ${result.rows.length} valid records.`}</p>
        <div className="interface-table-wrap">
          <table className="interface-table">
            <thead><tr><th>Record ID</th><th>Action</th><th>Quantity</th><th>Value</th><th>Category</th><th>Minimum</th><th>Increment</th><th>Owner</th></tr></thead>
            <tbody>
              {result.rows.map((row) => <tr key={row.lineNumber}><td>{row.identifier}</td><td>{row.action}</td><td>{row.quantity}</td><td>{row.value}</td><td>{row.category}</td><td>{row.minimum}</td><td>{row.increment}</td><td>{row.owner}</td></tr>)}
              {allErrors ? <tr><td className="interface-error-text" colSpan={8}>Unable to process data, are you sure it&apos;s in a good format?</td></tr> : null}
            </tbody>
          </table>
        </div>
        {hasErrors ? <ul className="interface-validation-errors">{result.errors.map((item) => <li key={item}>{item}</li>)}</ul> : null}
        <div className="interface-footer-actions">
          <button className="interface-secondary-button" type="button" onClick={() => setStage("entry")}>Back</button>
          <button className="interface-primary-button" type="button" disabled={allErrors} onClick={() => setStage("complete")}>Submit</button>
          <button className="interface-link-button" type="button" onClick={() => setStage("error")}>Simulate server error</button>
        </div>
      </section>
    );
  }

  return (
    <section className="interface-upload-form">
      <div className="interface-format-panel">
        <section>
          <h2>Data Requirements</h2>
          <ul>
            <li>A unique identifier is required</li>
            <li>Quantity and value must be positive</li>
            <li>Use the required column order shown below</li>
            <li>Maximum 50,000 rows per file</li>
          </ul>
          <p className="interface-csv-fields-label">Required columns</p>
          <p className="interface-csv-fields-copy">Use this header order for a CSV upload or pasted data:</p>
          <pre>record_id,action,quantity,value,category,minimum,increment,owner</pre>
        </section>
        <section>
          <div className="interface-sample-heading"><h2>Paste Example</h2><button className="interface-sample-link" type="button" onClick={() => handlePasteChange(sampleUpload)}>Use sample</button></div>
          <pre>{sampleUpload}</pre>
        </section>
      </div>

      <div className="interface-input-lanes">
        <section>
          <h2>Upload a CSV file</h2>
          <div
            className={`interface-dropzone${isDragging ? " is-dragging" : ""}`}
            onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            <input ref={fileInputRef} className="sr-only" id="data-upload-file" type="file" accept=".csv,text/csv" onChange={handleFileChange} />
            <span className="interface-upload-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.1 8.1 3.5 3.5 0 1 1 18 15H8" />
                <path d="m12 11-3 3m3-3 3 3m-3-3v8" />
              </svg>
            </span>
            {fileName ? <><strong>{fileName}</strong><button className="interface-link-button" type="button" onClick={() => { setFileName(null); setContent(""); }}>Remove file</button></> : <><strong>Drop a CSV file here</strong><button className="interface-link-button" type="button" onClick={() => fileInputRef.current?.click()}>or click to browse</button></>}
          </div>
        </section>

        <div className="interface-or" aria-hidden="true"><span /><strong>or</strong><span /></div>

        <section>
          <h2>Paste Data</h2>
          <textarea value={content} onChange={(event) => handlePasteChange(event.target.value)} placeholder="Paste comma or tab separated data here" />
        </section>
      </div>
      <div className="interface-entry-footer">
        <p className="interface-entry-status" id="review-data-hint">{fileName ? `File ready: ${fileName}` : content.trim() ? `${content.trim().split(/\r?\n/).filter(Boolean).length} line(s) ready` : "Nothing entered yet - Add a CSV file or paste data to enable review."}</p>
        <button aria-describedby={canReview ? undefined : "review-data-hint"} className="interface-primary-button" type="button" onClick={reviewData} disabled={!canReview}>Review Data</button>
      </div>
      {error ? <p className="interface-inline-error" role="alert">{error}</p> : null}
    </section>
  );
}
