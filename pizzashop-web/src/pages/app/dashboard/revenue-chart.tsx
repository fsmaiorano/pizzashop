import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/12', ravenue: 1200 },
  { date: '11/12', ravenue: 200 },
  { date: '12/12', ravenue: 800 },
  { date: '13/12', ravenue: 100 },
  { date: '14/12', ravenue: 1600 },
  { date: '15/12', ravenue: 2200 },
  { date: '16/12', ravenue: 3100 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Revenue for the month
          </CardTitle>
          <CardDescription>Daily income for the period</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-PT', {
                  style: 'currency',
                  currency: 'EUR',
                })
              }
            />
            <Line
              strokeWidth={2}
              type="linear"
              dataKey="ravenue"
              stroke={colors.red['500']}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
