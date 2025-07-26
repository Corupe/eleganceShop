"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, X } from "lucide-react";

export default function PushNotifications() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [permission, setPermission] =
    useState<NotificationPermission>("default");

  useEffect(() => {
    // Check if notifications are supported
    if (!("Notification" in window)) return;

    const currentPermission = Notification.permission;
    setPermission(currentPermission);

    // Show prompt if permission hasn't been requested yet
    if (currentPermission === "default") {
      // Delay showing the prompt to not overwhelm the user
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 5000); // Show after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnableNotifications = async () => {
    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      setShowPrompt(false);

      if (result === "granted") {
        // Send a test notification
        new Notification("Élégance Algérienne", {
          body: "Merci d'avoir activé les notifications !",
          icon: "/favicon.ico",
        });
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt || permission !== "default") return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Bell className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm mb-1">Notifications</h3>
          <p className="text-xs text-gray-600 mb-3">
            Restez informé de nos nouvelles collections et offres exclusives.
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={handleEnableNotifications}
              className="flex-1"
            >
              Activer
            </Button>
            <Button size="sm" variant="outline" onClick={handleDismiss}>
              Plus tard
            </Button>
          </div>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleDismiss}
          className="flex-shrink-0 p-1 h-auto"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
