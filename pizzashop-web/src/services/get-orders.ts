import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: pageIndex,
      orderId: orderId,
      customerName: customerName,
      status: status,
    },
  })

  return response.data
}

export async function getOrdersMock({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) {
  const mock = {
    orders: [
      {
        orderId: 'nhq188ihbc50o0iz56osls4e',
        createdAt: '2024-01-20T01:06:30.000Z',
        status: 'pending',
        customerName: 'Jaime Fisher',
        total: 2170,
      },
      {
        orderId: 'rq4dtx1lgbhql9yr1tl5yl7a',
        createdAt: '2024-01-19T22:06:20.000Z',
        status: 'pending',
        customerName: 'Jaime Fisher',
        total: 822,
      },
      {
        orderId: 'ilnwo02xfhg98h5q52whgh1d',
        createdAt: '2024-01-17T03:54:47.000Z',
        status: 'pending',
        customerName: 'Roderick Gleichner',
        total: 1413,
      },
      {
        orderId: 'thbj750oxk0le3970io2f04k',
        createdAt: '2024-01-16T09:01:20.000Z',
        status: 'pending',
        customerName: 'Roderick Gleichner',
        total: 765,
      },
      {
        orderId: 'wgmr6h9xnv4m16tisqwknh4s',
        createdAt: '2024-01-15T23:35:15.000Z',
        status: 'pending',
        customerName: 'Jaime Fisher',
        total: 1389,
      },
      {
        orderId: 'sf9z24ld05u1fpvgxbyjj5ka',
        createdAt: '2024-01-13T07:19:12.000Z',
        status: 'pending',
        customerName: 'Jaime Fisher',
        total: 1347,
      },
      {
        orderId: 'h0bb3wy14oi1ctwosvk1iggz',
        createdAt: '2024-01-11T20:44:37.000Z',
        status: 'pending',
        customerName: 'Jaime Fisher',
        total: 765,
      },
      {
        orderId: 'gpbcn2mr30jlqk9lddjz0j04',
        createdAt: '2024-01-10T01:58:05.000Z',
        status: 'pending',
        customerName: 'Roderick Gleichner',
        total: 843,
      },
      {
        orderId: 's1msvwdwtrnbxnpws68op4jr',
        createdAt: '2024-01-08T18:50:05.000Z',
        status: 'pending',
        customerName: 'Roderick Gleichner',
        total: 1334,
      },
      {
        orderId: 'vlsanbsdoo2cigo7au1is1d6',
        createdAt: '2024-01-03T14:18:26.000Z',
        status: 'pending',
        customerName: 'Jaime Fisher',
        total: 1345,
      },
    ],
    meta: { pageIndex: pageIndex, perPage: 10, totalCount: 200 },
  }

  if (orderId) {
    mock.orders = mock.orders.filter((order) => order.orderId === orderId)
  }

  if (customerName) {
    mock.orders = mock.orders.filter(
      (order) => order.customerName === customerName,
    )
  }

  if (status) {
    mock.orders = mock.orders.filter((order) => order.status === status)
  }

  //paginate
  if (pageIndex) {
    const start = (pageIndex - 1) * 10
    const end = pageIndex * 10
    mock.orders = mock.orders.slice(start, end)
  }

  return mock
}
