"use client";

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Seg", value: 420 },
  { name: "Ter", value: 610 },
  { name: "Qua", value: 560 },
  { name: "Qui", value: 820 },
  { name: "Sex", value: 740 },
  { name: "Sáb", value: 910 },
  { name: "Dom", value: 780 },
];

export function MetricsChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorFlux" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.4}
              />
              <stop
                offset="100%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              borderRadius: "8px",
              border: "1px solid hsl(var(--border))",
              fontSize: "12px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            fill="url(#colorFlux)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
