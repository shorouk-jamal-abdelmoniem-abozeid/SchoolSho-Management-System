"use client"
import { useState } from "react"
import { Calendar, momentLocalizer, Views, View } from "react-big-calendar"
import moment from "moment"
import { calendarEvents } from "@/lib/data"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK)

  const handleOnView = (selectedView: View) => {
    setView(selectedView)
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        onView={handleOnView}
        style={{ height: 500 }}
      />
    </div>
  )
}

export default BigCalendar
