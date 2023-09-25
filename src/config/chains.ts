import { goerli, sepolia } from "wagmi/chains";

import type { NetworkConfig } from "./types";

export enum ChainId {
  Shibuya = 81,
  Astar = 592,
  Goerli = 5,
  Sepolia = 11155111,
}

export function isSupportChain(chainId: number): chainId is ChainId {
  return Object.values(ChainId).includes(chainId);
}

export const CHAIN_CONFIG: Record<ChainId, NetworkConfig> = {
  [ChainId.Shibuya]: {
    id: 81,
    name: "Shibuya",
    network: "shibuya",
    nativeCurrency: {
      name: "Shibuya",
      symbol: "SBY",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: [`https://evm.shibuya.astar.network`],
        webSocket: [`wss://shibuya.public.blastapi.io`],
      },
      public: {
        http: [`https://evm.shibuya.astar.network`],
        webSocket: [`wss://shibuya.public.blastapi.io`],
      },
    },
    testnet: true,
  },

  [ChainId.Astar]: {
    id: 592,
    name: "Astar",
    network: "astar",
    nativeCurrency: {
      name: "ASTR",
      symbol: "ASTR",
      decimals: 18,
    },

    rpcUrls: {
      default: {
        http: ["https://astar.api.onfinality.io/public"],
        webSocket: [`wss://astar.api.onfinality.io/public-ws`],
      },
      public: {
        http: ["https://astar.api.onfinality.io/public"],
        webSocket: [`wss://astar.api.onfinality.io/public-ws`],
      },
    },
    blockExplorers: {
      default: {
        name: "subscan",
        url: "https://astar.subscan.io/",
      },
    },
  },
  [ChainId.Goerli]: goerli,
  [ChainId.Sepolia]: sepolia,
};
