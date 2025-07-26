"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Package,
} from "lucide-react";

const stats = [
  {
    title: "Ventes totales",
    value: "€12,450",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Commandes",
    value: "1,234",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Clients",
    value: "892",
    change: "+15.3%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Produits",
    value: "156",
    change: "-2.1%",
    trend: "down",
    icon: Package,
  },
];

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Tableau de Bord</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                {stat.change} par rapport au mois dernier
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ventes récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Robe Élégante</p>
                  <p className="text-sm text-gray-500">Commande #1234</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">€89.99</p>
                  <p className="text-sm text-gray-500">Il y a 2h</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Costume Classique</p>
                  <p className="text-sm text-gray-500">Commande #1235</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">€199.99</p>
                  <p className="text-sm text-gray-500">Il y a 4h</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sac à Main</p>
                  <p className="text-sm text-gray-500">Commande #1236</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">€149.99</p>
                  <p className="text-sm text-gray-500">Il y a 6h</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Produits populaires</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Robe Élégante</p>
                  <p className="text-sm text-gray-500">Femme</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">156 ventes</p>
                  <p className="text-sm text-green-500">+23%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Costume Classique</p>
                  <p className="text-sm text-gray-500">Homme</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">89 ventes</p>
                  <p className="text-sm text-green-500">+12%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sac à Main</p>
                  <p className="text-sm text-gray-500">Accessoires</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">67 ventes</p>
                  <p className="text-sm text-red-500">-5%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
