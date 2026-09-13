export const trackerSheetUrl = "https://docs.google.com/spreadsheets/d/1FoGZrSYydXmoHnMLfNdqlGa1GOpHdqvwLGOHW8XQz5o/edit?gid=0#gid=0";

export const dummyNewHire = {
  name: "Riya",
  role: "Product Designer",
  startDate: "September 9",
  cohort: "Cohort 04",
  checkInLabel: "Day 3 check-in",
  checkInMessage: "Riya is settling in beautifully.",
  checkInSummary: "Three items still need attention before her first week ends. Keep the welcome warm and the work moving.",
  totalEssentials: 9,
  completedEssentialsBeforeVisibleTasks: 4,
  tasks: [
    { title: "Company introduction", meta: "Completed Sep 9", complete: true },
    { title: "Laptop and access setup", meta: "IT ticket #4821", complete: true },
    { title: "Submit benefits enrollment", meta: "Due Sep 15", complete: false },
    { title: "Schedule first 1:1 with manager", meta: "Calendar action required", complete: false },
  ],
  meetings: [
    { month: "SEP", day: "14", title: "Design team welcome", meta: "10:30 AM · Google Meet" },
    { month: "SEP", day: "15", title: "Manager 1:1", meta: "2:00 PM · Needs confirmation" },
  ],
};
