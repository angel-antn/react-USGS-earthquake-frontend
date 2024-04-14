import { Filter } from "../../components/dashboard/Filter";
import { Header } from "../../components/layout/Header";
import { Results } from "../../components/dashboard/Results";
import { useDashboard } from "./useDashboard";
import { CommentModal } from "../../components/dashboard/CommentModal";

export const DashboardPage = () => {
  useDashboard();

  return (
    <>
      <Header />
      <main className="mt-10 mx-5 lg:mx-auto max-w-[1024px]">
        <Filter />
        <Results />
      </main>
      <section>
        <CommentModal></CommentModal>
      </section>
    </>
  );
};
