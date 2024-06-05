export interface FormData {
  firstName: string;
  lastname: string;
  email: string;
  address: string;
  profilePicture: {
    data: Buffer;
    contentType: string;
  } | null;
}
