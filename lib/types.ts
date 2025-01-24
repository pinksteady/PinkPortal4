export type Resident = {
  id: number
  name: string
  room: string
  stabilityScore: number
  pinkNoiseUsage: "Low" | "Medium" | "High"
  stabilityGoal: number
  notes: string[]
  healthMetrics: HealthMetric[]
  notifications: Notification[]
  pinkNoiseRecommendation: string
  personalizedGoal: {
    current: number
    target: number
    achieveBy: string
  }
  lastAssessment: string
}

export type DailyData = {
  day: number
  date: string
  stability: number
  pinkNoiseUsage: number
  fallData: FallData
  healthMetrics: HealthMetric[]
}

export type HealthMetric = {
  name: string
  value: number
  unit: string
  trend: "increasing" | "decreasing" | "stable"
}

export type Notification = {
  id: string
  type: "alert" | "recommendation" | "goal"
  message: string
  timestamp: string
  read: boolean
  priority: "low" | "medium" | "high"
}

export type FallData = {
  occurred: boolean
  severity: "minor" | "moderate" | "severe" | null
  location: string | null
  timeOfDay: "morning" | "afternoon" | "evening" | "night" | null
}

