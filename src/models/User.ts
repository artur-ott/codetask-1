export default class User {
  // uid is the internal id, e. g. created by firebase
  constructor (public uid: string,
               public email: string,
               public displayName: string,
               public role: Role = Role.STUDENT,
               public settings: Settings = new Settings()) { }
}

enum Role {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin'
}

class Settings {
  constructor (public autoplay: boolean = false) { }
}
