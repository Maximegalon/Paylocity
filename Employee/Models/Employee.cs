using System;
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
        public Int32 Salary { get; set; }

        [DataType(DataType.Date)]
        public DateTime HireDate { get; set; }
    }
}
