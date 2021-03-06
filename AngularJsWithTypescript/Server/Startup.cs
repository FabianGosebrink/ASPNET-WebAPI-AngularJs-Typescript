﻿using AngularJsWithTypescript.Server.Models;
using AngularJsWithTypescript.Server.Services;
using Microsoft.Owin;
using Owin;
using System.Collections.Generic;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.OData.Extensions;

[assembly: OwinStartup(typeof(AngularJsWithTypescript.Server.Startup))]

namespace AngularJsWithTypescript.Server
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            //app.UseWelcomePage();
            var config = new HttpConfiguration();

            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.AddODataQueryFilter();
            app.UseWebApi(config);
            //app.MapSignalR();

            //ADD DUMMY DATA
            IList<Person> persons = new List<Person>();
            persons.Add(new Person() { Id = 1, Age = 34, Name = "Claudio" });
            persons.Add(new Person() { Id = 2, Age = 28, Name = "Fabi" });

            Singleton.Instance.Persons = new List<Person>(persons);
        }
    }
}
