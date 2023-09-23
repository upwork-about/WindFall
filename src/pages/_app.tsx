import { FC, useEffect, ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { PageStaticProps } from "@/types/page";

import "@/assets/css/index.scss";

import MainLayout from "@/layouts/MainLayout";
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { goerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
 
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet,goerli],
  [publicProvider()],
)
 
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})



export const metadata = {
  title: "Next.js",
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getDefaultLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
}
const MyApp: FC<Omit<AppPropsWithLayout, "pageProps"> & { pageProps: PageStaticProps }> = ({
  Component,
  pageProps,
  router,
}) => {
  const getLayout = Component.getLayout ?? getDefaultLayout;
  return (
    <WagmiConfig config={config}>
        {getLayout(
          <Component
            {...(pageProps as any)}
            router={router}
          />
        )}
    </WagmiConfig>
  );
};

export default MyApp