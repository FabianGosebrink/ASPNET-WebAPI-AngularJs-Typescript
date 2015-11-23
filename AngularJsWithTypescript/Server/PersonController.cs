using AngularJsWithTypescript.Server.Models;
using AngularJsWithTypescript.Server.Services;
using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Web.Http;
using System.Web.OData;

namespace AngularJsWithTypescript.Server
{
    [RoutePrefix("api/person")]
    public class PersonController : ApiController
    {
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(Singleton.Instance.Persons);
            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }

        }

        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetSingle(int id)
        {
            Person person = Singleton.Instance.Persons.FirstOrDefault(x => x.Id == id);

            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }

        [HttpPost]
        public IHttpActionResult AddPerson([FromBody] Person person)
        {
            if (person == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Person personToAdd = new Person
            {
                Id = !Singleton.Instance.Persons.Any() ? 1 : Singleton.Instance.Persons.Max(x => x.Id) + 1,
                Age = person.Age,
                Name = person.Name
            };

            Singleton.Instance.Persons.Add(personToAdd);

            return Ok(personToAdd);
        }

        [HttpPatch]
        [Route("{id:int}")]
        public IHttpActionResult Patch(int id, Delta<Person> person)
        {
            if (person == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Person existingPerson = Singleton.Instance.Persons.FirstOrDefault(x => x.Id == id);

            if (existingPerson == null)
            {
                return NotFound();
            }

            person.Patch(existingPerson);

            int index = Singleton.Instance.Persons.FindIndex(x => x.Id == id);
            Singleton.Instance.Persons[index] = existingPerson;

            return Ok(existingPerson);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IHttpActionResult DeletePerson(int id)
        {
            Person personToRemove = Singleton.Instance.Persons.FirstOrDefault(x => x.Id == id);

            if (personToRemove == null)
            {
                return NotFound();
            }

            Singleton.Instance.Persons.Remove(personToRemove);

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}