export class Employee{
    constructor(
        public id: number,
        public first_name: string,
        public surname: string,
        public position: string,
        public mobile_phone: string,
        public email: string,
        public date_birth: Date,
        public img: string,
        public status: string
    ){}

}