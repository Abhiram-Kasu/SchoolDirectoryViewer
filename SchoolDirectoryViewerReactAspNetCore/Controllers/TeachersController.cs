using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SchoolDirectoryViewerReactAspNetCore.Models;
using System.Runtime.CompilerServices;

namespace SchoolDirectoryViewerReactAspNetCore.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    [EnableCors("_myAllowSpecificOrigins")]
    public class TeachersController : ControllerBase
    {

        private readonly FirestoreDb db;

        public TeachersController(FirestoreDb db)
        {
            this.db = db;
        }


        [HttpGet]
        public async IAsyncEnumerable<Teacher> Get()
        {
            


            await foreach(var item in db.Collection("teachers").ListDocumentsAsync())
            {
                await Task.Delay(5);
                yield return (await item.GetSnapshotAsync()).ConvertTo<Teacher>();
            }
        }
    }
}
