"use client"

import { useEffect } from "react"

export default function MobileOptimizations() {
  useEffect(() => {
    // Prevent zoom on input focus (iOS)
    const addMaximumScaleToMetaViewport = () => {
      const el = document.querySelector("meta[name=viewport]")
      if (el !== null) {
        let content = el.getAttribute("content")
        const re = /maximum-scale=[0-9.]+/g
        if (re.test(content)) {
          content = content.replace(re, "maximum-scale=1.0")
        } else {
          content = [content, "maximum-scale=1.0"].join(", ")
        }
        el.setAttribute("content", content)
      }
    }

    const disableIosTextFieldZoom = addMaximumScaleToMetaViewport

    // Disable zoom on input focus
    const inputs = document.querySelectorAll(
      'input[type="text"], input[type="email"], input[type="password"], input[type="search"], textarea, select',
    )
    inputs.forEach((input) => {
      input.addEventListener("focus", disableIosTextFieldZoom, false)
    })

    // Register Service Worker for PWA capabilities
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope)
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error)
          })
      })
    }

    // Prevent pinch-zoom on mobile devices
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }
    document.addEventListener("touchmove", preventZoom, { passive: false })

    // Add viewport meta tag for responsiveness (already in layout.tsx, but good to ensure)
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    if (!viewportMeta) {
      const meta = document.createElement("meta")
      meta.name = "viewport"
      meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      document.head.appendChild(meta)
    }

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    // Optimize touch events
    document.addEventListener("touchstart", () => {}, { passive: true })

    // Prevent pull-to-refresh on mobile
    document.body.style.overscrollBehavior = "none"

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", disableIosTextFieldZoom, false)
      })
      document.removeEventListener("touchmove", preventZoom)
    }
  }, [])

  return null
}
