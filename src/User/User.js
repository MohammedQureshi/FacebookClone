

class StatusOption {
    constructor(name, color) {
        name = name ?? "";
        color = color ?? "";

        this.name = name;
        this.color = color;
    }
}

export class User {
    static type = "User";
    static Status = {
        ONLINE: new StatusOption('ONLINE', '#31A24C'),
        AWAY: new StatusOption('AWAY', '#f3ea5f'),
        DND: new StatusOption('DO_NOT_DISTURB', '#ff3f3f'),
        OFFLINE: new StatusOption('OFFLINE', '#cccccc') 
    }

    constructor(image, status) {
        // this.user = image;

        this.status = status ?? User.Status.OFFLINE;
        this.type = User.type;
    }
}


export class CurrentUser {
    static PROFILE_IMAGE_URL = "https://media-exp3.licdn.com/dms/image/C4E03AQF2s8dGWpgC5g/profile-displayphoto-shrink_200_200/0/1592998404125?e=1629331200&v=beta&t=5IRMkWHeb6gNJBhmuZZcLKYNGjyaJ6Pd3F-ER5lVRxY"
}

export default User;