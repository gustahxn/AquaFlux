import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold">{value}</span>
      </CardContent>
    </Card>
  );
}
