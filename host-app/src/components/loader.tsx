import React, { Suspense } from "react";
import ErrorBoundary from "./error-boundary";

type Props = {
  loader: () => Promise<any>;
  loading?: React.ReactNode;
  error?: React.ReactNode;
};

const RemoteLoader: React.FC<Props> = ({ loader, loading, error }) => {
  const Remote = React.lazy(async () => {
    try {
      const mod = await loader();
      return mod.default ? mod : { default: () => <>{error ?? "Module not available"}</> };
    } catch (err) {
      console.error("Failed to load remote:", err);
      return { default: () => <>{error ?? "Module not available"}</> };
    }
  });

  return (
    <ErrorBoundary fallback={error ?? <h2>Something went wrong.</h2>}>
      <Suspense fallback={loading ?? <h2>Loading...</h2>}>
        <Remote />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RemoteLoader;
