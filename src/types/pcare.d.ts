export {};

declare global {
  interface Diagnose {
    kdDiag: string;
    nmDiag: string;
    nonSpesialis: boolean;
  }
}
