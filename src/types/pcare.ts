export interface Diagnose {
  kdDiag: string;
  nmDiag: string;
  nonSpesialis: boolean;
}

//  ======= OBAT ======

export interface GetDPHOType {
  kdObat: string;
  nmObat: string;
  sedia: number;
}

export interface ObatByKunjunganType {
  kdObatSK: number;
  kdRacikan: string;
  obat: Obat;
  signa1: number;
  signa2: number;
  jmlObat: number;
  jmlHari: number;
  kekuatan: number;
  jmlPermintaan: number;
  jmlObatRacikan: number;
}

interface Obat {
  kdObat: string;
  nmObat: string;
  sedia: number;
}

export interface AddObatPayload {
  kdObatSK: number;
  noKunjungan: string;
  racikan: boolean;
  kdRacikan: any;
  obatDPHO: boolean;
  kdObat: string;
  signa1: number;
  signa2: number;
  jmlObat: number;
  jmlPermintaan: number;
  nmObatNonDPHO: string;
}

export interface AddObatType {
  field: string;
  message: string;
}

//  ====== OBAT =======

export interface PoliFKTPType {
  kdPoli: string;
  nmPoli: string;
  poliSakit: boolean;
}

export interface ProviderRayonisasiType {
  kdProvider: string;
  nmProvider: string;
}

export interface StatusPulangType {
  kdStatusPulang: string;
  nmStatusPulang: string;
}

// ====== Tindakan ======

export interface ReferensiTindakanType {
  kdTindakan: string;
  nmTindakan: string;
  maxTarif: number;
  withValue: boolean;
}

export interface TindakanByKunjunganType {
  kdTindakanSK: number;
  noKunjungan: string;
  kdTindakan: string;
  nmTindakan: string;
  biaya: number;
  keterangan: string;
  hasil: number;
}

export interface TindakanPayload {
  kdTindakanSK: number;
  noKunjungan: string;
  kdTindakan: string;
  biaya: number;
  keterangan: any;
  hasil: number;
}

// ====== Tindakan ======

export interface AlergiJenisType {
  kdAlergi: string;
  nmAlergi: string;
}

export interface PrognosaType {
  kdPrognosa: string;
  nmPrognosa: string;
}

//
//
// ====== Kesadaran ==========

export interface KesadaranType {
  kdSadar: string;
  nmSadar: string;
}

// ====== Kesadaran ==========
//
//
