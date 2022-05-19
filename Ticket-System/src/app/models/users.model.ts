export interface Users {
    UserId: number;
    UserName: string;
    UserSurname: string; 
    UserFullname: string;
    UserContactNumber: number;
    UserAddress: string;
    UserEmail: string;
    UserCompany: string;
    UserPassword: string;

    //Foreign Keys:
    UserRoleId: number;
  }

  /* From Scope: 
Id = UserId
Name = UserName
Surname = UserSurname
Email = UserEmail
Password = UserPassword
Contact nr = UserContactNumber
Company = UserCompany
Role (default as basic user) = UserRoleId

*/