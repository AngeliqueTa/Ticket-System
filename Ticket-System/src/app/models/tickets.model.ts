import { TicketStatus } from "../enums/TicketStatusEnum.enum";
import { TicketTypes } from "../enums/TicketTypeEnum.enum";

export interface Tickets {
    TicketId: number;
    TicketNumber: string;
    TicketTitle: string;
    TicketDescription: string;
    TicketDateCreated: Date;
    TicketDateUpdated: Date; 
    TicketCurrentStatus: TicketStatus;
    TicketType: TicketTypes;
    TicketImage: string;
    //Rereference : number;

    //Foreign Keys:
    TicketUserId: number;
    TicketClientId: number;
    TicketProjectId: number;
    TicketSystemId: number;
  }

  /* From Scope: 
 Id = TicketId
Type = TicketType // enum
Description = TicketDescription
Client = TicketClientId
Project = TicketProjectId
System = TicketSystemId
Status = TicketCurrentStatus
Reference ?? 
Creator (email of the person who created the ticket) = TicketUserId
Image = TicketImage
Date created = TicketDateCreated

*/