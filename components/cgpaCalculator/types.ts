// types.ts
export interface Subject {
  name: string;
  creditUnit: number;
  grade: keyof typeof Grade;
}

export const Grade = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
} as const;
