export interface License {
    id: any;
    shortName: string;
    fullName: string;
    text: string;
    risk: string;
  }

export interface LicenseArray extends License {
  licenseArrayList: any;
}