import type { Employee } from "./Employee.ts";

export class EmployeeStatistics {
	employee: Employee[];

	constructor(employee: Employee[]) {
		if (!employee || employee.length === 0) {
			throw new Error("A dolgozók megadása kötelező");
		}

		this.employee = employee;
	};

	getMaxSalary(): number | undefined {
        let maxSalary: number | undefined = this.employee[0]?.salary;
        if (typeof maxSalary != "number") {
            throw new Error(`A 'getMaxSalary' nem tudott lefutni, a 'salary' valtozo tipusa: ${typeof maxSalary}`);
        } else {
            this.employee.forEach((emp: Employee) => {
                if (emp.salary > maxSalary!) {
                    maxSalary = emp.salary;
                };
            });
            return maxSalary;
        };
    };

	getAvarageAge(): number | undefined {
        let summedAges: number = 0;
        if (typeof this.employee[0]?.age != "number") {
            throw new Error(`A 'getAvarageAge' nem tudott lefutni, az 'age' valtozo tipusa: ${typeof this.employee[0]?.age}`);
        } else {
            this.employee.forEach((emp: Employee) => {
                summedAges += emp.age;
            });
            const avgAge = (summedAges / (this.employee.length));
            return Math.round(avgAge);
        };
    };

	    getHighestPaidEmployee(): Employee | undefined {
        let highestPaidEmployee: Employee | undefined = this.employee[0];
        if (typeof highestPaidEmployee != "object") {
            throw new Error(`A 'getHighestPaidEmployee' nem tudott lefutni, az 'Employee' tipusa: ${typeof highestPaidEmployee}`);
        } else {
            this.employee.forEach((emp: Employee) => {
                if (emp.salary > highestPaidEmployee!.salary) {
                    highestPaidEmployee = emp;
                };
            });
            return highestPaidEmployee;
        };
    };
	
	countEmployeesOverSalary(salary: number): number {
        let employeesOverSalary: number = 0;
        this.employee.forEach((emp: Employee) => {
            if(emp.salary > salary) {
                employeesOverSalary ++;
            };
        });
        return employeesOverSalary;
    };
}
