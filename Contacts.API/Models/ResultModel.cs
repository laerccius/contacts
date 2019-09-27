using System.Collections.Generic;

namespace Contacts.API.Models
{
    public class ResultModel
    {
        public bool Success
        {
            get { return Inconsistencias == null || Inconsistencias.Count == 0; }
        }

        public List<string> Inconsistencias { get; } = new List<string>();
    }
}