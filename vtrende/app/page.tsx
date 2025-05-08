import { MainPage } from "@/src/components/Client/MainPage";
import { Loading } from "@/src/shared/ui";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainPage />
    </Suspense>
  );
};

export default page;
