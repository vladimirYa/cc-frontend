import { IIndividualUser } from './shared/individual-user.interface';

export class IndividualUserService {

    userData: IIndividualUser = {
        name: 'Mellisa',
        surname: 'Robertson'
    }

    getData(): IIndividualUser{
        return this.userData;
    }
}
