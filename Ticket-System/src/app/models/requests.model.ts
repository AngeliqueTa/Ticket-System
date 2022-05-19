import { RequestType } from "../enums/RequestTypeEnum.enum";

export interface Requests {
    RequestId: number;
    RequestTitle: string;
    RequestDescription: string; 
    RequestAdditionalInfo: string;
    RequestDateCreated: Date;
    RequestStatus: boolean;
    RequestType: RequestType;

    //Foreign Keys:
    RequestClientId: number;
    RequestProjectId: number;
    RequestSystemId: number;
    RequestUserId: number;
  }

  /* From Scope: 
id =RequestId 
type = RequestType 
description (can be null) = RequestDescription
client = RequestClientId
project = RequestProjectId
system = RequestSystemId
additional info = RequestAdditionalInfo
requestor = RequestUserId
requested date = RequestDateCreated
status (default 0, changes to 1 when resolved) = RequestStatus
*/