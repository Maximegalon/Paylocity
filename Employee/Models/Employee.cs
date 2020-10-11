using System;
// using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Employee.Models
{
    public class Employee
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200, MinimumLength = 1)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Currency)]
        public Int16 Salary { get; set; }

        // public List<string> dependants { get; set; }

        [DataType(DataType.Date)]
        public DateTime HireDate { get; set; }
    }
}
