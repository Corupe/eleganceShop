"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

interface User {
  id: string
  email: string
  name?: string
  phone?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name?: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (email === "test@example.com" && password === "password") {
      const loggedInUser: User = { id: "123", email, name: "Test User" }
      setUser(loggedInUser)
      localStorage.setItem("user", JSON.stringify(loggedInUser))
      setLoading(false)
      return true
    } else {
      setLoading(false)
      alert("Invalid credentials")
      return false
    }
  }, [])

  const register = useCallback(async (email: string, password: string, name?: string) => {
    setLoading(true)
    // Simulate API call for registration
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // In a real app, you'd check if email already exists, hash password, etc.
    const newUser: User = { id: `user-${Date.now()}`, email, name }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    setLoading(false)
    return true
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem("user")
  }, [])

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
