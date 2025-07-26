"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search, Filter } from "lucide-react";

const mockInventory = [
  {
    id: 1,
    name: "Robe Élégante",
    sku: "RB-001",
    category: "Femme",
    size: "M",
    color: "Noir",
    quantity: 25,
    price: 89.99,
    status: "En stock",
  },
  {
    id: 2,
    name: "Costume Classique",
    sku: "CS-002",
    category: "Homme",
    size: "L",
    color: "Bleu",
    quantity: 12,
    price: 199.99,
    status: "En stock",
  },
  {
    id: 3,
    name: "Sac à Main",
    sku: "AC-003",
    category: "Accessoires",
    size: "Unique",
    color: "Marron",
    quantity: 0,
    price: 149.99,
    status: "Rupture",
  },
];

export default function InventoryManagement() {
  const [inventory, setInventory] = useState(mockInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En stock":
        return "bg-green-100 text-green-800";
      case "Rupture":
        return "bg-red-100 text-red-800";
      case "Faible":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestion des Stocks</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un produit
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search">Rechercher</Label>
              <div className="relative mt-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="search"
                  placeholder="Nom ou SKU..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="category">Catégorie</Label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="Femme">Femme</SelectItem>
                  <SelectItem value="Homme">Homme</SelectItem>
                  <SelectItem value="Accessoires">Accessoires</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Actions</Label>
              <div className="flex gap-2 mt-1">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrer
                </Button>
                <Button variant="outline" size="sm">
                  Exporter
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Inventaire ({filteredInventory.length} produits)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Produit</th>
                  <th className="text-left p-2">SKU</th>
                  <th className="text-left p-2">Catégorie</th>
                  <th className="text-left p-2">Taille</th>
                  <th className="text-left p-2">Couleur</th>
                  <th className="text-left p-2">Quantité</th>
                  <th className="text-left p-2">Prix</th>
                  <th className="text-left p-2">Statut</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{item.name}</td>
                    <td className="p-2 text-sm text-gray-600">{item.sku}</td>
                    <td className="p-2">{item.category}</td>
                    <td className="p-2">{item.size}</td>
                    <td className="p-2">{item.color}</td>
                    <td className="p-2">{item.quantity}</td>
                    <td className="p-2">{item.price.toFixed(2)} €</td>
                    <td className="p-2">
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
