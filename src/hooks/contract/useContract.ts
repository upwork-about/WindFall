import { useContractReads } from "wagmi";
import { abi } from "./abi";
import { utils } from "ethers";

export const useContract = () => {
  const contractData = {
    address: "0xEB0a4E999DC0AB2cFD1b39202B3BD6973c0989DC" as any,
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
  const winningAmountData = data?.[0].result;
  const stakedAmounts = data?.[0].result;
  let dayCounter = (data?.[0].result as any) || 0;
  dayCounter = Number(dayCounter);
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

  console.log(data, recentWindfall, "datas");
  return {
    recentWindfall,
  };
};
