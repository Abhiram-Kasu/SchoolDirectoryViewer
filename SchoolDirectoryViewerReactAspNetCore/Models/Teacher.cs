using Google.Cloud.Firestore;

namespace SchoolDirectoryViewerReactAspNetCore.Models
{
    [FirestoreData]
    public class Teacher
    {

        [FirestoreProperty]
        public required string Name { get; init; }
        [FirestoreProperty]
        public required string PhoneNumber { get; init; }
        [FirestoreProperty]
        public required string Department { get; init; }
        [FirestoreProperty]
        public required string RoomNumber { get; init; }
        [FirestoreProperty]
        public required string Email { get; init; }
        [FirestoreProperty]
        public required string ProfilePicture { get; init; }


        
    }

}
