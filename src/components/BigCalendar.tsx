"use client"

import { useState } from "react"
import { Calendar, momentLocalizer, Views } from "react-big-calendar"
import moment from "moment"
import { calendarEvents } from "@/lib/data"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK)

  const handleOnView = (selectedView) => {
    setView(selectedView)
  }

  return (
    <div className="h-screen">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        onView={handleOnView}
        style={{ height: "100%" }}
        min={new Date(2026, 6, 6, 8, 0)}
        max={new Date(2026, 6, 10, 16, 0)}
      />
    </div>
  )
}

export default BigCalendar
