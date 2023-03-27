using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace react_dotnet_example.Models
{
    public class UserRepository: IUserRepository
    {
        private List<UserModel> users = new List<UserModel>();
        private int _nextId = 1;

        public UserRepository()
        {
            using (var db = new App.DatabaseContext()){
                var user_data = db.Users;
                foreach(var ch in user_data) {
                    users.Add(ch); 
                }
            }
        }

        public IEnumerable<UserModel> GetAll()
        {
            return users;
        }

        public UserModel Add(UserModel item)
        {

            using (var db = new App.DatabaseContext()){
                
                var users = db.Users;
                foreach(var user in users)
                {
                    Console.WriteLine("Order: order.Created");
                }
                db.Users.Add(item);
                db.SaveChanges(); 
            }
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.id = _nextId++;
            users.Add(item);
            return item;
        }

        public UserModel Update(UserModel item)
        {
            Console.WriteLine("{0} {1} {2}", item.id, item.lastName, item.email);
            
            using (var db = new App.DatabaseContext()){
                var user_data = db.Users;
                foreach(var user in user_data)
                {
                    if (user.id == item.id) {
                        users.RemoveAt(user.id - 1); 
                        user.firstName = item.firstName; 
                        user.lastName = item.lastName; 
                        user.email = item.email; 
                        Console.WriteLine(users); 
                        users.Insert(user.id - 1, item); 
                    }
                }
                db.SaveChanges(); 
            }
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            return item;
        }
    }
}