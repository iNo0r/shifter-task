# Shifter

The project has 2 apps for shifts registertion.

- Classic (done)
  - Overlap checker
  - Error detactor and displayer
  - Shifts are sorted based on the oldest
  - Data are registerd to the localStorage
- Modern (to be developed)

### **Overlap Management:**

The App will not force the user to register a shifts that only happned after the last entered shift, but it will check each registered shift, and if a clash found the user will be notified to fix his/her input.

### **Error Detaction:**

The are five erros could happen during a shift registeration:

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
