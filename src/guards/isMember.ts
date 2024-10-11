import { Member } from "@/types/member";

export function isMember(data: any): data is Member {
  return (
    typeof data.firstName === "string" &&
    typeof data.lastName === "string" &&
    typeof data.userName === "string" &&
    typeof data.bio === "string"
  );
}
