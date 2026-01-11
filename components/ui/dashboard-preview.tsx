import { Dashboard } from "components/ui/dashboard";

export function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">
      <div className="rounded-xl border bg-muted/40 backdrop-blur shadow-xl overflow-hidden">
        <Dashboard />
      </div>
    </section>
  );
}
