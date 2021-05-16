export interface Report {
  code?: string;
  startDate: Date;
  endDate: Date;
  totalReportLoaded?: number;
  totalReportSent?: number;
  totalReportFailed?: number;
  reportStatus?: boolean;
  dateCreation: Date;
}
