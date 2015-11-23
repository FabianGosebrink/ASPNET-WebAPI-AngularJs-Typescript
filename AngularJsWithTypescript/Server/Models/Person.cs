using System;
using System.ComponentModel.DataAnnotations;

namespace AngularJsWithTypescript.Server.Models
{
    public class Person
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [Range(1, 150)]
        public Int64 Age { get; set; }
    }
}