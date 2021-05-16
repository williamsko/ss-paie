export class ObjectUtility {
  static storeAgentInformation(agent: any): void {
    localStorage.setItem('AGENT', JSON.stringify(agent));
  }
  static getAgentInformation(): any {
    return JSON.parse(localStorage.getItem('AGENT'));
  }

  static removeAgentInformation(): void {
    localStorage.removeItem('AGENT');
  }

  static storeReportingInformation(data: any): void {
    const reporting = JSON.parse(localStorage.getItem('REPORTING')) || [];
    reporting.push(JSON.stringify(data));
    localStorage.setItem('REPORTING', JSON.stringify(reporting));
  }

  static getReportingInformation(): any {
    return JSON.parse(localStorage.getItem('REPORTING'));
  }

  static storeSalaries(data: any, shouldBeEdited): void {
    if (shouldBeEdited === true) {
      this.updateSalarie(data);
    } else {
      const salaries = JSON.parse(localStorage.getItem('SALARIES')) || [];
      salaries.push(JSON.stringify(data));
      localStorage.setItem('SALARIES', JSON.stringify(salaries));
    }
  }

  private static updateSalarie(salarie) {
    const salaries = JSON.parse(localStorage.getItem('SALARIES'));
    const data = salaries.find(
      (element) => JSON.parse(element).matricule == salarie.matricule
    );
    salaries[salaries.indexOf(data)] = JSON.stringify(salarie);
    localStorage.setItem('SALARIES', JSON.stringify(salaries));
  }

  static getSalaries(): any {
    return JSON.parse(localStorage.getItem('SALARIES'));
  }

  static storeParamSMTP(data: any): void {
    localStorage.setItem('SMTP', data);
  }
  static getParamSMTP(): any {
    return JSON.parse(localStorage.getItem('SMTP'));
  }

  static clearStorage(): void {
    localStorage.removeItem('files');
  }

  static storeFichesPaie(data: any, code: string): void {
    const fiches = JSON.parse(localStorage.getItem(code)) || [];
    fiches.push(JSON.stringify(data));
    localStorage.setItem(code, JSON.stringify(fiches));
  }

  static getFichesPaie(code: string): any {
    return JSON.parse(localStorage.getItem(code));
  }
}
