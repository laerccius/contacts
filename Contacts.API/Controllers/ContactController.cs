using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Contacts.API.Services;
using Contacts.API.Models.Contact;
using Contacts.API.Models;

namespace APIProdutos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Bearer")]
    public class ContactController : ControllerBase
    {
        private ContactService _service;

        public ContactController(ContactService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<ContactModel> Get()
        {
            //return _service.List();
            return new List<ContactModel>(){
                new ContactModel(){
Id = 1,
Latitude = -23.547659,
Longitude = -46.614935,
Name ="José"
            },new ContactModel(){Id=2,Latitude =-23.547178,Longitude=-46.619526,Name="Maria"},new ContactModel(){Id = 3 , Latitude =-23.548968, Longitude= -46.621854 , Name = "Antônia" }};
        }

        [HttpGet("{id}")]
        public ActionResult<ContactModel> Get(int id)
        {
            return null;
            // var Models.Contact.Contact = _service.Get(id);
            // if (Models.Contact.Contact != null)
            //     return Models.Contact.Contact;
            // else
            //     return NotFound();
        }

        [HttpPost]
        public ResultModel Post([FromBody]ContactModel contactModel)
        {
            return null;
            //return _service.Insert(Models.Contact.Contact);
        }

        [HttpPut]
        public ResultModel Put([FromBody]ContactModel contactModel)
        {
            return null;
            //return _service.Update(Models.Contact.Contact);
        }
    }
}