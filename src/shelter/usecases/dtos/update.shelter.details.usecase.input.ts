export default class UpdateShelterDetailUserCaseInput {
    name : string;
    whatsapp: string;
    email: string;
    phone: string;

    constructor(data: Partial<UpdateShelterDetailUserCaseInput>){
        Object.assign(this, data);
    }

}