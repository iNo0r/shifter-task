# Shifter

### Technologies Used

- Tailwind
- React Js

### Why React?

In the past, I relied on Vue Js, but recently I felt to try something new to broaden my skills set.

It is true that Vanilla Js is a better option to develop such simple projects, but I'm using React as a personal preference

The project has 2 apps for shifts registration.

- Classic (done)
  - Overlap checker
  - Error detector and displayer
  - Shifts are sorted based on the oldest
  - Data are registered to the localStorage
- Modern (to be developed)

### **Overlap Management:**

The App will not force the user to register a shifts that only happened after the last entered shift, but it will check each registered shift, and if a clash found the user will be notified to fix his/her input.

### **Error Detection:**

The are five errors could happen during a shift registration:

- Start time overlap.
  - _the start time of a shift happens during another shift_
- End time overlap.
  - _the end time of a shift happens during another shift_
- Extensive Overlap.
  - _the shift starts before a certain shift, but ends after it_
- 0 Minutes duration
  - _the duration of a shift is 0_
- Invalid duration
- _the shift ends timestamp is before starting_

all of the aforementioned errors are handled.
