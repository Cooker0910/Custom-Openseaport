declare const ERC1155ABI: (
  | {
      anonymous: boolean;
      inputs: {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
      }[];
      name: string;
      type: string;
      outputs?: undefined;
      stateMutability?: undefined;
    }
  | {
      inputs: {
        internalType: string;
        name: string;
        type: string;
      }[];
      name: string;
      outputs: {
        internalType: string;
        name: string;
        type: string;
      }[];
      stateMutability: string;
      type: string;
      anonymous?: undefined;
    }
)[];
export { ERC1155ABI };