export interface Clients {
    ClientId: number;
    ClientName: string;
    ClientSurname: string; 
    ClientFullname: string;
    ClientCellphone: number;
    ClientEmail: string;
    ClientAddress: string;
    ClientCompany: string;
    isClientUser: boolean;

    //Foreign Keys:
    ClientProjectId: number;
    ClientSystemId: number;
  }

/* From Scope: 
Id = ClientId
Name = ClientName
Abbreviation = ClientCompany
*/