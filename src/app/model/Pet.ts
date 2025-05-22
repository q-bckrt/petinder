// This interface defines the structure of a Pet object.
// It represents a 'contract' that the Pet objects and the server must adhere to.
export interface Pet {
  id: number;
  name: string;
  kind: string;
  image: string;
  breed: string;
  profileText: string;
  popularity: number;
}
