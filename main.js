class Company {
  #documents;

  constructor(workers, balance, projects, documents) {
    this.workers = workers;
    this.balance = balance;
    this.projects = projects;
    this.#documents = documents;
    Company.companies.push(this);
  }
  
  getDocuments() {
    return this.#documents;
  }

  static getStrongestCompany() {
    let strongestCompany = null;
    let maxBalance = -Infinity;

    for (const company of Company.companies) {
      if (company.balance > maxBalance) {
        maxBalance = company.balance;
        strongestCompany = company;
      }
    }

    return strongestCompany;
  }
}

Company.companies = [];

const company1 = new Company(100, 1000000, ['Project A', 'Project B'], ['Document 1', 'Document 2']);
const company2 = new Company(50, 800000, ['Project C', 'Project D'], ['Document 3', 'Document 4']);
const company3 = new Company(200, 1200000, ['Project E', 'Project F'], ['Document 5', 'Document 6']);

const strongestCompany = Company.getStrongestCompany();
console.log('Найбільша компанія:', strongestCompany);