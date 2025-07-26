"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Copy,
  Share2,
  Link as LinkIcon,
} from "lucide-react";

interface SocialSharingProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function SocialSharing({
  title = "Élégance Algérienne",
  description = "Découvrez notre collection exclusive de mode et lifestyle",
  url = "https://elegancealgerienne.dz",
  image = "/hero.png",
}: SocialSharingProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    text: description,
    url,
  };

  const handleShare = async (platform: string) => {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        description
      )}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      instagram: `https://www.instagram.com/`, // Instagram doesn't support direct sharing via URL
    };

    if (platform === "instagram") {
      // For Instagram, we can only open the app
      window.open(shareUrls.instagram, "_blank");
      return;
    }

    if (platform === "native" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Error sharing:", error);
      }
      return;
    }

    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("Error copying link:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="w-5 h-5" />
          Partager
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="shareUrl">Lien à partager</Label>
          <div className="flex gap-2 mt-1">
            <Input id="shareUrl" value={url} readOnly />
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="flex-shrink-0"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          {copied && (
            <p className="text-sm text-green-600 mt-1">Lien copié !</p>
          )}
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">Partager sur</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={() => handleShare("facebook")}
              className="flex items-center gap-2"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </Button>
            <Button
              variant="outline"
              onClick={() => handleShare("twitter")}
              className="flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </Button>
            <Button
              variant="outline"
              onClick={() => handleShare("linkedin")}
              className="flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => handleShare("instagram")}
              className="flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </Button>
          </div>
        </div>

        {navigator && typeof navigator.share !== "undefined" && (
          <Button
            onClick={() => handleShare("native")}
            className="w-full flex items-center gap-2"
          >
            <LinkIcon className="w-4 h-4" />
            Partager via l'application
          </Button>
        )}

        <div className="text-xs text-gray-500 text-center">
          En partageant, vous acceptez nos conditions d'utilisation.
        </div>
      </CardContent>
    </Card>
  );
}
