export interface ReferensiSpesialisType {
  kdSpesialis: string;
  nmSpesialis: string;
}

export interface ReferensiSubSpesialisType {
  kdSubSpesialis: string;
  nmSubSpesialis: string;
  kdPoliRujuk: string;
}

export interface ReferensiSaranaType {
  kdSarana: string;
  nmSarana: string;
}

export interface ReferensiKhususType {
  kdKhusus: string;
  nmKhusus: string;
}

export interface FaskesRujukan {
  kdppk: string;
  nmppk: string;
  alamatPpk: string;
  telpPpk: string;
  kelas: string;
  nmkc: string;
  distance: number;
  jadwal: string;
  jmlRujuk: number;
  kapasitas: number;
  persentase: number;
}
