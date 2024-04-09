export default class UpdateShelterDetailUserCaseOutput {
    name : string;
    whatsApp: string;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<UpdateShelterDetailUserCaseOutput>){
        Object.assign(this, data);
    }
    
}