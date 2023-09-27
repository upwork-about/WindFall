import { useContractReads } from "wagmi";
import { abi } from "./abi";
import { utils } from "ethers";
import { useWallet } from "../walletConnect";
import { CHAIN_CONFIG, ChainId } from "@/config";

export const useContract = () => {
  const { chainId } = useWallet();
  console.log(chainId, "chainId");
  const contractData = {
    address: CHAIN_CONFIG[chainId as ChainId]?.address?.stakeProvider,
    abi: abi as any,
  };

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...contractData,
        functionName: "retrievePastData",
      },
      {
        ...contractData,
        functionName: "getWinningAmounts",
      },
      {
        ...contractData,
        functionName: "getStakedAmounts",
      },
      {
        ...contractData,
        functionName: "dayCounter",
      },
    ],
  });

  console.log(data, "datas");

  const pastData = data?.[0].result || [];
  const winningAmountData = data?.[1].result || [];
  const stakedAmounts = data?.[2].result || [];
  let dayCounter = (data?.[3].result as any) || 0;
  dayCounter = Number(dayCounter);

  const getRecentWindfallData = () => {
    const recentWindfall = [];
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date();
      let currentHour = currentDate.getHours();

      if (currentHour < 17) {
        currentDate.setDate(currentDate.getDate() - i - 1);
      } else {
        currentDate.setDate(currentDate.getDate() - i);
      }

      let formattedDate = currentDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      let item = {
        title: (dayCounter + i - 1) % 7 === 0 ? "WEEKLY" : "DAILY",
        date: formattedDate,
        nft: pastData[0]?.[i].substring(0, 4) + "..." + pastData[0]?.[i].substring(20, 24),
        amount: pastData[1]?.[i] ? parseFloat(utils?.formatEther(pastData[1]?.[i])).toPrecision(3) : 0,
      };
      recentWindfall.push(item);
    }
    return recentWindfall;
  };

  const getTokenTableData = () => {
    const networkList = ["CANTO", "Ethereum", "Matic"];
    const list = networkList.map((item) => {
      return item === "CANTO"
        ? {
            token: item,
            deposit: stakedAmounts[1] ? parseFloat(utils.formatEther(stakedAmounts[1])).toPrecision(4) : 0,
            daily: winningAmountData[1] ? parseFloat(utils.formatEther(winningAmountData[1])).toPrecision(4) : 0,
            super: winningAmountData[0] ? parseFloat(utils.formatEther(winningAmountData[0])).toPrecision(4) : 0,
          }
        : {
            token: item,
            deposit: 0,
            daily: 0,
            super: 0,
          };
    });

    return list;
  };

  const recentWindfall = getRecentWindfallData();
  const tokenTableData = getTokenTableData();
  console.log(data, recentWindfall, "datas");
  return {
    recentWindfall,
    tokenTableData,
  };
};
