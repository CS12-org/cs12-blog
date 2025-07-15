import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

import queryClient from "~/lib/react-query";

type Props = { children?: ReactNode };

function QueryProvider(props: Props) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
