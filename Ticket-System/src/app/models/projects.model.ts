export interface Projects {
    ProjectId: number;
    ProjectReferenceNumber: string;
    ProjectTitle: string;
    ProjectDescription: string;
    ProjectType: string;

    //Foreign Keys:
    ProjectSystemId: number;
    ProjectClientId: number;

/* From Scope: 
Id = ProjectId
Name = ProjectTitle
Abbreviation = ProjectRerenceNumber
*/
  }