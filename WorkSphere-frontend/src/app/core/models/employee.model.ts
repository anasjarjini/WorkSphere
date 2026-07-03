export interface ImportError {
  line: number;
  email: string;
  reason: string;
}

export interface ImportResult {
  imported: number;
  failed: number;
  errors: ImportError[];
}
