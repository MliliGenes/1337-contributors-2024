export interface Member {
  firstName: string;
  lastName: string;
  userName: string;
  bio: string;
  skills?: string[];
}

export interface MembersState {
  list: Member[];
  loading: boolean;
  error: string | null;
}
