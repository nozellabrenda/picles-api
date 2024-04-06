export default class UpdateShelterDetailUserCaseOutput {
    name : string;
    whatsapp: string;
    email: string;
    phone: string;
    createAt: Date;
    updateAt: Date;

    constructor(data: Partial<UpdateShelterDetailUserCaseOutput>){
        Object.assign(this, data);
    }
    
}