export {};

declare global {
  interface Diagnose {
    kdDiag: string;
    nmDiag: string;
    nonSpesialis: boolean;
  }

  interface AllergyType {
    kdJenisAlergi: string;
    nmJenisAlergi: string;
  }
}
