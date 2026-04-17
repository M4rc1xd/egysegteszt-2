import { describe, it, expect } from "vitest";
import type { Employee } from "../classes/Employee.ts";
import { EmployeeStatistics } from "../classes/EmployeeStatistics.ts";

const testEmployees_1: Employee[] = [
    {
        name: 'a',
        age: 68,
        salary: 1
    },
    {
        name: 'b',
        age: 29,
        salary: 5
    },
    {
        name: 'c',
        age: 30,
        salary: 6
    },
];
const testEmployees_2: Employee[] = [
    {
        name: 'f',
        age: 20,
        salary: 123
    },
    {
        name: 'o',
        age: 90,
        salary: 600
    },
    {
        name: 's',
        age: 78,
        salary: 4567856
    },
];

const testEmployees_3: Employee[] = [

];

// Konstrukktor tesztelese
describe("Konstruktor tesztelese", () => {
    it("A testEmployees_1 employee-kat tartalmaz, nem kene visszadobnia semmit sem", () => {
        expect(() => new EmployeeStatistics(testEmployees_1)).not.toThrow();
    });
    it("A testEmployees_2 employee-kat tartalmaz, nem kene visszadobnia semmit sem", () => {
        expect(() => new EmployeeStatistics(testEmployees_2)).not.toThrow();
    });
    it("A testEmployees_3 ures, hibat kell visszadobnia", () => {
        expect(() => new EmployeeStatistics(testEmployees_3)).toThrow();
    });
});

// Fuggvenyek tesztelese
// getMaxSalary
describe("Metodusok tesztelese: getMaxSalary", () => {
    it("A testEmployees_1 'getMaxSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).getMaxSalary()).toBe(6);
    });
    it("A testEmployees_2 'getMaxSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).getMaxSalary()).toBe(4567856);
    });
});

// getAvarageAge
describe("Metodusok tesztelese: getAvarageAge", () => {
    it("A testEmployees_2 'getAvarageAge' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).getAvarageAge()).toBe(42);
    });
    it("A testEmployees_2 'getAvarageAge' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).getAvarageAge()).toBe(63);
    });
});

// getHighestPaidEmployee
describe("Metodusok tesztelese: getHighestPaidEmployee", () => {
    it("A testEmployees_2 'getHighestPaidEmployee' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).getHighestPaidEmployee()).toStrictEqual(
            {
                name: 'c',
                age: 30,
                salary: 6
            }
        );
    });
    it("A testEmployees_2 'getHighestPaidEmployee' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).getHighestPaidEmployee()).toStrictEqual(
            {
                name: 's',
                age: 78,
                salary: 4567856
            }
        );
    });
});

// countEmployeesOverSalary
describe("Metodusok tesztelese: countEmployeesOverSalary", () => {
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).countEmployeesOverSalary(3000)).toBe(0);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).countEmployeesOverSalary(2999)).toBe(0);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_1).countEmployeesOverSalary(0)).toBe(3);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).countEmployeesOverSalary(-99999999999999999)).toBe(3);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).countEmployeesOverSalary(8900)).toBe(1);
    });
    it("A testEmployees_2 'countEmployeesOverSalary' metodusanak az erteke", () => {
        expect(new EmployeeStatistics(testEmployees_2).countEmployeesOverSalary(500)).toBe(2);
    });
});