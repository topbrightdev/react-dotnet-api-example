// using MongoDB.Bson;  
// using MongoDB.Bson.Serialization.Attributes;  

namespace react_dotnet_example.Models
{
    public class UserModel
    {   
        // [BsonId]  
        // [BsonRepresentation(BsonType.ObjectId)]
        public int id { get; set; }
        
        public string firstName { get; set; }

        public string lastName { get; set; }

        public string email { get; set; }
    }
}