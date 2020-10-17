using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Employee.Data;

namespace Employee.Models
{
    public class EmployeesController : Controller
    {
        private readonly EmployeeContext _context;

        public EmployeesController(EmployeeContext context)
        {
            _context = context;
        }

        // GET: Employees
        public async Task<ActionResult<IEnumerable<Employee>>> Index()
        {
            return await _context.Employee.ToListAsync();
        }

        // GET: Employees/Details/5
        public async Task<Employee> Details(int? id)
        {
            // @TODO: Validate input, error handling, return codes
            var employee = await _context.Employee.FirstOrDefaultAsync(m => m.Id == id);

            return employee;
        }
    }
}
